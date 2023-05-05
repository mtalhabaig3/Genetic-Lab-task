import React from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {Formik} from 'formik';
import validationSchema from '../utils/validations';

const LoginForm = () => {
  const handleSubmit = values => {
    console.log(`Email: ${values.email}\nPassword: ${values.password}`);
  };

  return (
    <View style={{padding: 10}}>
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
            <Text style={{marginBottom: 5}}>Email</Text>
            <TextInput
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              placeholder="Email"
              style={{
                borderWidth: 1,
                borderColor: errors.email && touched.email ? 'red' : 'gray',
                padding: 5,
              }}
            />
            {errors.email && touched.email && (
              <Text style={{color: 'red', marginTop: 5}}>{errors.email}</Text>
            )}
            <Text style={{marginTop: 10, marginBottom: 5}}>Password</Text>
            <TextInput
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              placeholder="Password"
              secureTextEntry
              style={{
                borderWidth: 1,
                borderColor:
                  errors.password && touched.password ? 'red' : 'gray',
                padding: 5,
              }}
            />
            {errors.password && touched.password && (
              <Text style={{color: 'red', marginTop: 5}}>
                {errors.password}
              </Text>
            )}
            <Button title="Submit" onPress={handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default LoginForm;
