import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import CustomButton from '../components/CustomButton';
import COLORS from '../styles/colors';
import {SafeAreaView} from 'react-native-safe-area-context';

const ReservationSchema = Yup.object().shape({
  name: Yup.string().required('Введите имя'),
  phone: Yup.string().required('Введите телефон'),
  email: Yup.string().email('Неверный формат email').required('Введите email'),
  guests: Yup.string().required('Введите количество гостей'),
  date: Yup.string().required('Введите дату'),
});

const ReservationScreen = ({navigation}: any) => {
  const handleSubmit = () => {
    navigation.navigate('ReservationSuccessScreen');
  };

  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>
      <Text style={styles.title}>Зарезервировать столик</Text>
      <Formik
        initialValues={{
          name: '',
          phone: '',
          email: '',
          guests: '',
          date: '',
        }}
        validationSchema={ReservationSchema}
        onSubmit={handleSubmit}>
        {({handleChange, handleSubmit, values, errors, touched}) => (
          <View style={styles.formContainer}>
            <TextInput
              style={styles.input}
              placeholder="Имя"
              placeholderTextColor={COLORS.gray}
              value={values.name}
              onChangeText={handleChange('name')}
            />
            {touched.name && errors.name && (
              <Text style={styles.error}>{errors.name}</Text>
            )}

            <TextInput
              style={styles.input}
              placeholder="Номер телефона"
              placeholderTextColor={COLORS.gray}
              value={values.phone}
              onChangeText={handleChange('phone')}
              keyboardType="phone-pad"
            />
            {touched.phone && errors.phone && (
              <Text style={styles.error}>{errors.phone}</Text>
            )}

            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor={COLORS.gray}
              value={values.email}
              onChangeText={handleChange('email')}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            {touched.email && errors.email && (
              <Text style={styles.error}>{errors.email}</Text>
            )}

            <TextInput
              style={styles.input}
              placeholder="Гости"
              placeholderTextColor={COLORS.gray}
              value={values.guests}
              onChangeText={handleChange('guests')}
              keyboardType="number-pad"
            />
            {touched.guests && errors.guests && (
              <Text style={styles.error}>{errors.guests}</Text>
            )}

            <TextInput
              style={styles.input}
              placeholder="Дата"
              placeholderTextColor={COLORS.gray}
              value={values.date}
              onChangeText={handleChange('date')}
            />
            {touched.date && errors.date && (
              <Text style={styles.error}>{errors.date}</Text>
            )}

            <View style={styles.buttonContainer}>
              <CustomButton title="ЗАБРОНИРОВАТЬ" onPress={handleSubmit} />
            </View>
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    marginVertical: 20,
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderRadius: 25,
    paddingHorizontal: 20,
    marginBottom: 10,
    color: COLORS.black,
  },
  error: {
    color: COLORS.error,
    fontSize: 12,
    marginBottom: 10,
    marginLeft: 20,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
});

export default ReservationScreen;
