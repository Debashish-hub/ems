import { View, Image, StyleSheet } from "react-native";
import { TextInput, Icon, Button, Text, MD3Theme } from "react-native-paper";
import React, { useMemo, useState } from "react";
import { Fontisto, MaterialCommunityIcons } from "@expo/vector-icons";
import { useTheme } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import GradientButton from "@/components/Gradient/GradientButton";
import { ColorDao } from "@/constants/Colors";
import {
  FormProvider,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import FormInput from "@/components/Input/FormInput";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/navigation";

type FormValues = {
  email: string;
  password: string;
};

const LoginScreen = ({ route, navigation }: LoginScreenInitialProps) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const { ...methods } = useForm<FormValues>({ mode: "onChange" });
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log({ data })
    navigation.navigate('Home');
  };

  const [formError, setError] = useState<Boolean>(false);

  const onError: SubmitErrorHandler<FormValues> = (errors, e) => {
    return console.log({ errors });
  };
  return (
    <LinearGradient
      colors={[
        ColorDao.topBackgroundGradient,
        ColorDao.bottomBackgroundGradient,
      ]}
      style={styles.background}
      start={{ x: 0.1, y: 0.9 }}
      end={{ x: 0.9, y: 0.1 }}
    >
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={{
            uri: "https://goldeneagle.comviva.com/idm-service/idm/v0/assets/images/Icon_comviva_orb.png",
          }}
        />
        <Text style={styles.title}>Welcome to EMS</Text>
        <View style={styles.textFieldView}>
          <FormProvider {...methods}>
            <FormInput
              name="email"
              label="E-mail/Employee Id"
              placeholder="E-mail/Employee Id"
              rules={{
                required: "Email is required",
                pattern: {
                  value: /\b[\w\\.+-]+@[\w\\.-]+\.\w{2,4}\b/,
                  message: "Email in invalid format",
                },
              }}
              setFormError={setError}
              mode="outlined"
              left={
                <TextInput.Icon
                  icon={() => (
                    <View
                      style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <MaterialCommunityIcons
                        name="email"
                        size={24}
                        color={theme.colors.primary}
                      />
                    </View>
                  )}
                />
              }
            />
            <FormInput
              name="password"
              label="PIN"
              placeholder="PIN"
              rules={{ required: "PIN is required!" }}
              setFormError={setError}
              mode="outlined"
              maxLength={6}
              left={
                <TextInput.Icon
                  icon={() => (
                    <View
                      style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Fontisto
                        name="locked"
                        size={24}
                        color={theme.colors.primary}
                      />
                    </View>
                  )}
                />
              }
            />
          </FormProvider>
        </View>
        <View style={styles.textFieldView}>
          <Button icon={"check-circle-outline"} style={styles.keepBtn}>
            Keep me Logged In
          </Button>
          <GradientButton
            title={"LOGIN"}
            onPress={methods.handleSubmit(onSubmit, onError)}
          />
          <Button>Forgot password .. ?</Button>
        </View>
        <View style={styles.separatorView}>
          <View style={styles.separator} />
          <Text style={styles.orText}>OR</Text>
          <View style={styles.separator} />
        </View>
        <View style={styles.accountView}>
          <Text style={{ color: theme.colors.onPrimary }}>
            Don't have an account?
          </Text>
          <GradientButton
            title="Create now"
            onPress={() => console.log("Registration flow")}
          />
        </View>
      </View>
    </LinearGradient>
  );
};

export default LoginScreen;

const createStyles = (theme: MD3Theme) =>
  StyleSheet.create({
    container: {},
    logo: {
      width: 180,
      height: 180,
      alignSelf: "center",
      resizeMode: "contain",
    },
    separator: {
      height: 1,
      backgroundColor: theme.colors.onPrimary,
      marginLeft: 6,
      flex: 1,
    },
    textfield: {
      marginTop: 8,
      padding: 6,
    },
    textFieldView: {
      marginHorizontal: 16,
      marginTop: 6,
    },
    separatorView: {
      marginHorizontal: 16,
      marginTop: 6,
      flexDirection: "row",
      alignItems: "center",
      height: 40,
    },
    orText: {
      fontSize: 16,
      marginHorizontal: 4,
      padding: 4,
      color: theme.colors.onPrimary,
    },
    accountView: {
      marginHorizontal: 16,
      marginTop: 6,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "baseline",
    },
    title: {
      alignSelf: "center",
      fontSize: 18,
      color: theme.colors.onPrimary,
      marginVertical: 6,
    },
    keepBtn: {
      alignSelf: "flex-start",
    },
    background: {
      flex: 1,
      justifyContent: "center",
      flexDirection: "column",
      gap: 3,
    },
    textfieldView: {
      flex: 1,
      justifyContent: "flex-end",
      alignItems: "center",
    },
  });
type LoginScreenInitialProps = NativeStackScreenProps<
  RootStackParamList,
  "Login"
>;
