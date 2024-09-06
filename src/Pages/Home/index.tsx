import React, {Fragment, useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  ActionButton,
  Actions,
  ActionsProgress,
  ActionText,
  BarProgress,
  Container,
  Content,
  ExerciseText,
  ProgressContainer,
  RegressiveTime,
  SelectExercise,
  SelectExerciseContainer,
  Time,
  TimeText,
} from './styles';
import Header from '../../Components/Header';
import { Dimensions, TouchableOpacity, View } from 'react-native';
import Infos from './Infos';
import { colors } from '../../styles';

import Progress from './Progress';
import Markers from './Progress/markers';
import { useDispatch, useSelector } from 'react-redux';
import { AppActions } from '../../store/ducks/app';
import { ExcerciseActions } from '../../store/ducks/exercises';

const Home: React.FC = () => {
  const [isPortrait, setIsPortrait] = useState<string>('portrait');
  const [force, setForce] = useState<any>(0);
  const [start, setStart] = useState<boolean>(false);
  const [seconds, setSeconds] = useState<any>(0);
	const [isValide, setIsValide] = useState<boolean | null>(null);
	const [ALTER_VALUE, setALTER_VALUE] = useState<number>(20);

  const currentExcersice = useSelector(
    (state: any) => state.excersices.current_exercise,
  );
  const excersices = useSelector((state: any) => state.excersices.excersices);
	const forceMax = useSelector((state: any) => state.excersices.forceMax);
  const dispath = useDispatch();

  function getOrientation() {
    if (Dimensions.get('window').width < Dimensions.get('window').height) {
      setIsPortrait('portrait');
    } else {
      setIsPortrait('');
    }
  }

  useEffect(() => {
    Dimensions.addEventListener('change', getOrientation);
  }, []);

  function handleStrongProgress() {
		dispath(ExcerciseActions.reset())
		setForce(0);
		setSeconds(0);
    setStart(true);
		setIsValide(null);
		setALTER_VALUE(20);
  }

	useEffect(() => {
		if (!isValide && start && isValide != null) {
			dispath(ExcerciseActions.set_repeat());
			// setALTER_VALUE(ALTER_VALUE + 5);
		}
	}, [isValide,start]);


  function handleProxOrAntExcersice(isProx: boolean) {
    const excersiceExist = excersices.find(
      (exercise: any) =>
        exercise.id ==
        (isProx == true ? currentExcersice.id + 1 : currentExcersice.id - 1),
    );
    if (excersiceExist) {
      dispath(ExcerciseActions.set_current_excercise(excersiceExist));
    } else {
      dispath(ExcerciseActions.set_current_excercise(currentExcersice));
    }
  }

	function calc_percent_values(valKG: any,seconds: number = 0) {
		const valueKg: any = parseFloat(valKG)?.toFixed(1)
		if(valueKg < 3) {
			setIsValide(false);
		}
		if (valueKg > 3 && !isValide) {
			setIsValide(true);
		}
		setForce(valueKg)
		setSeconds(seconds + 1);
		dispath(ExcerciseActions.set_valor(valueKg, seconds + 1));
	}

	const handleFinally = () => {
		setForce(0);
		setStart(false);
		dispath(AppActions.openModal());
		setSeconds(0);
	}


	let demoInterval: any = null;
	useEffect(() => {
		if (start && start != null) {
			let time:any = parseFloat(seconds);
			var demoCounter = 0;
			const value = 20;
			demoInterval = setInterval(function () {
				time += 0.1;
				calc_percent_values(
					value * Math.sin((5 * demoCounter * Math.PI) / 180) + value,
					time?.toFixed(1),
				);
				demoCounter++;
			}, 100);
		}
		return () => {
			clearInterval(demoInterval);
		};
	}, [start]);

  return (
    <Fragment>
      <Header isPortrait={isPortrait} />
      <Container
        style={
          !!isPortrait ? { flexDirection: 'column' } : { flexDirection: 'row' }
        }>
        <Infos isPortrait={isPortrait} />
        <Content
          style={
            !!isPortrait
              ? {
                  flex: 0.87,
                  paddingTop: 20,
                  paddingLeft: 20,
                  paddingRight: 8,
                }
              : {
                  flex: 0.8,
                  paddingHorizontal: 30,
                  paddingTop: 20,
                }
          }>
          <ProgressContainer>
            <ActionsProgress>
              <Icon name={'settings'} size={30} color={colors.primary} />
              <Icon name={'analytics'} size={30} color={colors.primary} />
            </ActionsProgress>
            <BarProgress
              style={!!isPortrait ? { marginTop: 55 } : { marginTop: 30 }}>
              <Progress step={force} steps={forceMax} height={isPortrait ? 46 : 30} />
            </BarProgress>
            <Markers isPortrait={isPortrait} step={force} />
          </ProgressContainer>

          <Time style={!!isPortrait == false && { marginBottom: 10 }}>
            <RegressiveTime>
              <Icon name={'access-time'} size={22} color={colors.primary} />
              <TimeText>00m 0{seconds}s</TimeText>
            </RegressiveTime>
            <SelectExerciseContainer>
              <SelectExercise
                style={!!isPortrait ? { height: 45 } : { height: 30 }}>
                <TouchableOpacity
                  onPress={() => handleProxOrAntExcersice(false)}>
                  <Icon
                    name={'chevron-left'}
                    size={28}
                    color={colors.silver_black}
                  />
                </TouchableOpacity>
                <ExerciseText
                  style={!!isPortrait ? { fontSize: 18 } : { fontSize: 15 }}>
                  {currentExcersice?.title}
                </ExerciseText>
                <TouchableOpacity
                  onPress={() => handleProxOrAntExcersice(true)}>
                  <Icon
                    name={'chevron-right'}
                    size={28}
                    color={colors.silver_black}
                  />
                </TouchableOpacity>
              </SelectExercise>
            </SelectExerciseContainer>
          </Time>

          <Actions>
            <ActionButton
              onPress={() => {

                start ? handleFinally() :handleStrongProgress();
              }}>
              <Icon name={start ? 'stop': 'play-arrow'} size={28} color={colors.white} />
              <ActionText>{start ? "Finalizar" : "Iniciar"}</ActionText>
            </ActionButton>

            <ActionButton>
              <Icon name={'bar-chart'} size={20} color={colors.white} />
              <ActionText>RELATÓRIOS</ActionText>
            </ActionButton>
          </Actions>
        </Content>
      </Container>
    </Fragment>
  );
};

export default Home;
