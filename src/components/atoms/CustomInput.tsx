import React from 'react';
import {
  KeyboardTypeOptions,
  Platform,
  ReturnKeyTypeOptions,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {Control, Controller} from 'react-hook-form';
import Color from '@/utils/colors';

type CustomInputProps = {
  errors?: any;
  name: string;
  label: string;
  editable?: boolean;
  placeHolder: string;
  control: Control<any>;
  returnKeyType?: ReturnKeyTypeOptions;
  keyboardType?: KeyboardTypeOptions;
};

export default function CustomInput({
  control,
  errors,
  placeHolder,
  name,
  editable = true,
  keyboardType = 'default',
  label,
  returnKeyType = 'done',
}: CustomInputProps) {
  return (
    <View style={styles.container}>
      <Text style={{marginBottom: 8}}>{label} </Text>
      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={styles.input}
            placeholder={placeHolder}
            // placeholderTextColor={Colors.placeHolder}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            editable={editable}
            keyboardType={keyboardType}
            returnKeyType={returnKeyType}
          />
        )}
        name={name}
      />
      {errors && <Text style={[styles.error]}>{errors?.message}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },

  input: {
    borderRadius: 0,
    borderWidth: 0.6,
    // borderColor: Colors.primary,
    paddingHorizontal: 8,
    // color: Colors.primary,
    paddingVertical: Platform.OS === 'ios' ? 12 : 8,
  },

  error: {
    fontSize: 11,
    marginTop: 2,
    includeFontPadding: false,
    color: Color.primary,
  },
});
