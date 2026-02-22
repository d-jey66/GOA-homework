import { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity,
  StyleSheet, ScrollView, Alert, ActivityIndicator,
} from 'react-native';
import { router } from 'expo-router';
import { useAuth } from '../../hooks/useAuth';
import { COLORS } from '../../constants/config';

export default function RegisterScreen() {
  const { register } = useAuth();
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' });
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    if (!form.name || !form.email || !form.password)
      return Alert.alert('Error', 'Please fill all fields');
    if (form.password !== form.confirm)
      return Alert.alert('Error', 'Passwords do not match');
    if (form.password.length < 6)
      return Alert.alert('Error', 'Password must be at least 6 characters');

    setLoading(true);
    try {
      await register(form.name, form.email, form.password);
    } catch (err: any) {
      Alert.alert('Registration Failed', err?.response?.data?.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll} keyboardShouldPersistTaps="handled">
        <View style={styles.header}>
          <Text style={styles.logo}>✨</Text>
          <Text style={styles.title}>Create account</Text>
          <Text style={styles.subtitle}>Join us today — it's free</Text>
        </View>

        <View style={styles.card}>
          {[
            { label: 'Full Name', key: 'name', placeholder: 'John Doe', type: 'default' },
            { label: 'Email', key: 'email', placeholder: 'you@example.com', type: 'email-address' },
            { label: 'Password', key: 'password', placeholder: '••••••••', secure: true },
            { label: 'Confirm Password', key: 'confirm', placeholder: '••••••••', secure: true },
          ].map((field) => (
            <View key={field.key}>
              <Text style={styles.fieldLabel}>{field.label}</Text>
              <TextInput
                style={styles.input}
                placeholder={field.placeholder}
                placeholderTextColor={COLORS.muted}
                keyboardType={(field.type as any) || 'default'}
                autoCapitalize={field.key === 'name' ? 'words' : 'none'}
                secureTextEntry={field.secure}
                value={(form as any)[field.key]}
                onChangeText={(v) => setForm({ ...form, [field.key]: v })}
              />
            </View>
          ))}

          <TouchableOpacity
            style={[styles.btn, loading && styles.btnDisabled]}
            onPress={handleRegister}
            disabled={loading}
            activeOpacity={0.8}
          >
            {loading
              ? <ActivityIndicator color="#fff" />
              : <Text style={styles.btnText}>Create Account →</Text>
            }
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Already have an account? </Text>
          <TouchableOpacity onPress={() => router.back()}>
            <Text style={styles.footerLink}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.bg },
  scroll: { flexGrow: 1, justifyContent: 'center', padding: 24 },
  header: { alignItems: 'center', marginBottom: 36 },
  logo: { fontSize: 52, marginBottom: 16 },
  title: { color: COLORS.text, fontSize: 28, fontWeight: '900', letterSpacing: -0.5 },
  subtitle: { color: COLORS.muted, fontSize: 14, marginTop: 4 },
  card: {
    backgroundColor: COLORS.surface, borderWidth: 1, borderColor: COLORS.border,
    borderRadius: 12, padding: 24,
  },
  fieldLabel: { color: COLORS.muted, fontSize: 12, fontWeight: '700', letterSpacing: 0.5, marginBottom: 6 },
  input: {
    backgroundColor: COLORS.bg, borderWidth: 1, borderColor: COLORS.border,
    borderRadius: 8, color: COLORS.text, padding: 14, fontSize: 15, marginBottom: 16,
  },
  btn: {
    backgroundColor: COLORS.accent, paddingVertical: 16,
    borderRadius: 8, alignItems: 'center', marginTop: 4,
  },
  btnDisabled: { opacity: 0.6 },
  btnText: { color: '#fff', fontWeight: '800', fontSize: 16 },
  footer: { flexDirection: 'row', justifyContent: 'center', marginTop: 28 },
  footerText: { color: COLORS.muted, fontSize: 14 },
  footerLink: { color: COLORS.accentLight, fontSize: 14, fontWeight: '700' },
});
