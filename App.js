import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

// Custom Button Component
function CustomButton({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.customButton} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

// Onboarding Screen
function OnboardingScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Discover Your Dream Job Here</Text>
      <Text style={styles.subHeading}>Explore all the existing job roles based on your interest and study major</Text>
      
      <CustomButton title="Login" onPress={() => navigation.navigate('Login')} />
      <CustomButton title="Register" onPress={() => navigation.navigate('Signup')} />
    </View>
  );
}

// Login Screen
function LoginScreen({ navigation }) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    
    <View style={styles.container}>
    
      <Text style={styles.heading}>Login here</Text>
      <Text> Welcome back you’ve been missed!</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <CustomButton title="Sign in" onPress={() => alert('Login Successful!')} />
      <CustomButton title="Create new account" onPress={() => navigation.navigate('Signup')} />
      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>
    </View>
  );
}

// Signup Screen
function SignupScreen({ navigation }) {
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Create a New Account</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <CustomButton title="Sign up" onPress={() => alert('Signup Successful!')} />
      <CustomButton title="Already have an account" onPress={() => navigation.navigate('Login')} />
    </View>
  );
}

// Forgot Password Screen
function ForgotPasswordScreen({ navigation }) {
  const [email, setEmail] = React.useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Reset Your Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
      />
      <CustomButton title="Submit" onPress={() => alert('Password reset link sent!')} />
      <CustomButton title="Go back to Login" onPress={() => navigation.navigate('Login')} />
    </View>
  );
}

// Stack Navigator
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding">
        <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login' }} />
        <Stack.Screen name="Signup" component={SignupScreen} options={{ title: 'Sign Up' }} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{ title: 'Forgot Password' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f0f4f8',
  },
  heading: {
    fontSize: 26,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  subHeading: {
    fontSize: 18,
    color: '#666',
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    width: '85%',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  customButton: {
    backgroundColor: '#4C68FF',
    padding: 15,
    borderRadius: 8,
    width: '85%',
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  forgotPasswordText: {
    color: '#4C68FF',
    fontSize: 16,
    fontWeight: '500',
    textDecorationLine: 'underline',
    marginTop: 10,
  },
});