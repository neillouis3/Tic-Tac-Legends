import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

type Props = {
    children: React.ReactNode;
    onPress: () => void;
    style?: any;
};

export default function Button({
    children,
    onPress,
    style,
    ...rest
    }: Props) {
    return (
        <TouchableOpacity
        onPress={onPress}
        style={[styles.button, style]}
        {...rest}>
            {children}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        padding: 12,
        borderRadius: 6,
        backgroundColor: '#0a7ea4',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
