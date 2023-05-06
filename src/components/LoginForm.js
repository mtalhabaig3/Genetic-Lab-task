import React from 'react';
import {View, Text, TextInput, Button, StyleSheet, Alert} from 'react-native';
import {Formik} from 'formik';
import validationSchema from '../utils/validations';
import {TouchableOpacity} from 'react-native';

const LoginForm = () => {
  const handleSubmit = values => {
    const {email, password} = values;
    Alert.alert('Form Submission', `Email: ${email}\nPassword: ${password}`, [
      {text: 'OK'},
    ]);
  };

  return (
    <View
      style={{
        padding: 10,
        flexDirection: 'column',
        // justifyContent: 'center',
        // alignItems: 'center',
      }}>
      <Formik
        initialValues={{email: '', password: ''}}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View>
            <Text style={{marginBottom: 5, fontSize: 16}}>Email</Text>
            <TextInput
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              placeholder="Email"
              style={[
                styles.textInput,
                {
                  borderColor: errors.email && touched.email ? 'red' : 'gray',
                },
              ]}
            />
            {errors.email && touched.email && (
              <Text style={{color: 'red', marginTop: 5}}>{errors.email}</Text>
            )}
            <Text style={{marginTop: 10, marginBottom: 5, fontSize: 16}}>
              Password
            </Text>
            <TextInput
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              placeholder="Password"
              secureTextEntry
              style={[
                styles.textInput,
                {
                  borderColor: errors.email && touched.email ? 'red' : 'gray',
                },
              ]}
            />
            {errors.password && touched.password && (
              <Text style={{color: 'red', marginTop: 5}}>
                {errors.password}
              </Text>
            )}
            <TouchableOpacity style={styles.button}>
              <Button title="Submit" onPress={handleSubmit} color={'black'} />
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  button: {
    width: 400,
    backgroundColor: 'lightgreen',
    alignSelf: 'center',
    marginTop: 50,
    borderRadius: 10,
  },
});
