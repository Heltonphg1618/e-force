import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Avatar, Caption, Drawer, Text, Title } from 'react-native-paper';

import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../../styles';

export function DrawerContent(props: any) {
  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: 'row', marginTop: 15 }}>
              <Avatar.Image
                style={{ backgroundColor: 'transparent', marginTop: 10 }}
                source={require('../../assets/gray_man.png')}
                size={70}
              />
              <View
                style={{
                  flex: 1,
                  marginLeft: 15,
                  flexDirection: 'column',
                  marginTop: -6,
                }}>
                <Title style={styles.title}>Helton Wylammi</Title>
                <Caption style={styles.caption}>Plano: Trial até</Caption>
                <Caption style={styles.caption}>22/10/2020 00:00</Caption>
                <TouchableOpacity style={styles.managerAccount}>
                  <Caption style={{ fontSize: 14, color: colors.silver_black }}>
                    Gerencie sua conta
                  </Caption>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              style={styles.item}
              icon={({ color, size }) => (
                <Icon name="settings" color={color} size={size} />
              )}
              label="Configurações"
              onPress={() => props.navigation.navigate('Home')}
            />
            <DrawerItem
              style={styles.item}
              icon={({ color, size }) => (
                <Icon name="school" color={color} size={size} />
              )}
              label="Dúvidas"
              onPress={() => props.navigation.navigate('Home')}
            />
            <DrawerItem
              style={styles.item}
              icon={({ color, size }) => (
                <Icon name="support-agent" color={color} size={size} />
              )}
              label="Fale conosco"
              onPress={() => props.navigation.navigate('Home')}
            />
            <DrawerItem
              style={styles.item}
              icon={({ color, size }) => (
                <Icon name="emoji-events" color={color} size={size} />
              )}
              label="E-Force pontos"
              onPress={() => props.navigation.navigate('Home')}
            />
          </Drawer.Section>
        </View>
        <View style={styles.section}>
          <Text style={{ color: colors.primary, fontSize: 15 }}>
            Indique amigos e ganhe descontos
          </Text>
          <Text style={{ fontSize: 11, color: colors.silver_black }}>
            use seu link exlusivo abaixo para indicar
          </Text>
          <View style={styles.link}>
            <Text style={{ fontSize: 11.2, color: colors.silver_black }}>
              https://ganhe.eforce
            </Text>
            <View style={{ flexDirection: 'row' }}>
              <Icon
                style={{ marginRight: 5 }}
                name={'content-copy'}
                size={20}
                color={colors.silver_black}
              />
              <Icon name={'share'} size={20} color={colors.silver_black} />
            </View>
          </View>
        </View>
      </DrawerContentScrollView>

      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Sair do App"
          onPress={() => {}}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  item: {
    marginVertical: -1.8,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
    marginBottom: -2,
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    marginTop: 5,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  link: {
    flexDirection: 'row',
    width: '92%',
    height: 40,
    borderRadius: 8,
    backgroundColor: '#c6c3c3',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 5,
    marginTop: 10,
  },
  section: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
    borderBottomWidth: 0.5,
    borderTopColor: colors.silver,
  },
  bottomDrawerSection: {
    marginBottom: 1,
    borderTopColor: colors.silver,
    borderTopWidth: 0.5,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    paddingHorizontal: 16,
  },
  managerAccount: {
    width: '80%',
    height: 28,
    borderRadius: 12,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
    borderWidth: 1,
    borderColor: colors.silver,
  },
});
