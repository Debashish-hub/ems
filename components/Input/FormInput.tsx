import { useMemo } from "react";
import {
  UseControllerProps,
  useController,
  useFormContext,
} from "react-hook-form";
import { View, StyleSheet } from "react-native";
import { HelperText, MD3Theme, TextInputProps, TextInput, useTheme } from "react-native-paper";

const FormInput = (props: FormInputProps) => {
  const formContext = useFormContext();
  const { formState } = formContext;
  const { name, label, rules, defaultValue, ...inputProps } = props;
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme])
  const { field } = useController({ name, rules, defaultValue });
  const hasError = Boolean(formState?.errors[name]);
  return (
    <View style={styles.container}>
      <TextInput
        autoCapitalize="none"
        textAlign="left"
        onChangeText={field.onChange}
        onBlur={field.onBlur}
        value={field.value}
        {...inputProps}
      />
      <HelperText type="error" visible={hasError}>{formState.errors[name]?.message ?? ''}</HelperText>
    </View>
  );
};

interface FormInputProps extends TextInputProps, UseControllerProps {
  label: string;
  name: string;
  defaultValue?: string;
  setFormError: Function;
}

const createStyles = (theme: MD3Theme) => StyleSheet.create({
    container: {
        marginTop: 8,
        padding: 6,
    }
})
export default FormInput