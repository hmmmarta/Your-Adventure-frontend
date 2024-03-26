import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { Controller } from 'react-hook-form';
import styles from "../Input/styles";

const Input = ({ control, name, rules = {}, placeholder, secureTextEntry }) => {
    const [isFocused, setIsFocused] = useState(false);
    return (
        <View >
            <Controller
                control={control}
                name={name}
                rules={rules}
                render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
                    <>
                        <TextInput
                            value={value}
                            onChangeText={onChange}
                            onBlur={() => {
                                onBlur();
                                setIsFocused(false);
                            }}
                            onFocus={() => {
                                setIsFocused(true);
                            }}
                            placeholder={placeholder}
                            placeholderTextColor="#969696"
                            style={[
                                styles.input,
                                { borderColor: isFocused ? "#367AFF" : error ? 'red' : '#e8e8e8' } 
                            ]} 
                            secureTextEntry={secureTextEntry}
                        />
                        {error && (
                            <Text style={{ color: 'red', alignSelf: 'stretch', marginLeft: 20 }}>{error.message || 'Error'}</Text>
                        )}
                    </>
                )}
            />
        </View>
    );
};

export default Input;