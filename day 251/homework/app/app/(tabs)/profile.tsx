import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useAuth } from '../../hooks/useAuth';
import { COLORS } from '../../constants/config';

export default function ProfileScreen() {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    Alert.alert('Sign Out', 'Are you sure you want to sign out?', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Sign Out', style: 'destructive', onPress: logout },
    ]);
  };

  return (
    <View style={styles.container}>
      {/* Avatar */}
      <View style={styles.avatarSection}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{user?.name?.charAt(0).toUpperCase()}</Text>
        </View>
        <Text style={styles.name}>{user?.name}</Text>
        <Text style={styles.email}>{user?.email}</Text>
        {user?.role === 'admin' && (
          <View style={styles.adminBadge}>
            <Text style={styles.adminBadgeText}>⚡ Administrator</Text>
          </View>
        )}
      </View>

      {/* Info card */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Account Details</Text>
        {[
          { label: 'Name', value: user?.name },
          { label: 'Email', value: user?.email },
          { label: 'Role', value: user?.role },
          { label: 'Account ID', value: user?.id?.slice(-8) },
        ].map((row, i) => (
          <View key={i} style={[styles.row, i < 3 && styles.rowBorder]}>
            <Text style={styles.rowLabel}>{row.label}</Text>
            <Text style={styles.rowValue}>{row.value}</Text>
          </View>
        ))}
      </View>

      {/* Logout */}
      <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout} activeOpacity={0.8}>
        <Text style={styles.logoutText}>🚪 Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.bg, padding: 24 },
  avatarSection: { alignItems: 'center', paddingVertical: 32 },
  avatar: {
    width: 88, height: 88, borderRadius: 100, backgroundColor: COLORS.accent,
    alignItems: 'center', justifyContent: 'center', marginBottom: 14,
  },
  avatarText: { color: '#fff', fontSize: 36, fontWeight: '900' },
  name: { color: COLORS.text, fontSize: 22, fontWeight: '900', marginBottom: 4 },
  email: { color: COLORS.muted, fontSize: 14 },
  adminBadge: {
    backgroundColor: COLORS.accent + '33', borderWidth: 1, borderColor: COLORS.accent,
    paddingHorizontal: 14, paddingVertical: 4, borderRadius: 100, marginTop: 10,
  },
  adminBadgeText: { color: COLORS.accentLight, fontSize: 12, fontWeight: '700' },
  card: {
    backgroundColor: COLORS.surface, borderWidth: 1, borderColor: COLORS.border,
    borderRadius: 12, padding: 20, marginBottom: 20,
  },
  cardTitle: { color: COLORS.muted, fontSize: 11, fontWeight: '700', letterSpacing: 2, marginBottom: 16 },
  row: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 12 },
  rowBorder: { borderBottomWidth: 1, borderBottomColor: COLORS.border },
  rowLabel: { color: COLORS.muted, fontSize: 14 },
  rowValue: { color: COLORS.text, fontSize: 14, fontWeight: '700' },
  logoutBtn: {
    borderWidth: 1, borderColor: COLORS.danger, paddingVertical: 16,
    borderRadius: 10, alignItems: 'center',
  },
  logoutText: { color: COLORS.danger, fontWeight: '800', fontSize: 15 },
});
