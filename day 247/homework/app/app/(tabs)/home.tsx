import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { useAuth } from '../../hooks/useAuth';
import { COLORS } from '../../constants/config';

export default function HomeScreen() {
  const { user } = useAuth();

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Hero */}
        <View style={styles.hero}>
          <Text style={styles.greeting}>Hello, {user?.name?.split(' ')[0]} 👋</Text>
          <Text style={styles.heroTitle}>Discover{'\n'}Products</Text>
          <Text style={styles.heroSub}>
            Browse our curated collection of quality products, hand-picked just for you.
          </Text>
          <TouchableOpacity style={styles.heroBtn} onPress={() => router.push('/(tabs)/products')}>
            <Text style={styles.heroBtnText}>Shop Now →</Text>
          </TouchableOpacity>
        </View>

        {/* Cards */}
        <View style={styles.featureGrid}>
          {[
            { emoji: '🔥', title: 'New Arrivals', sub: 'Fresh products added daily' },
            { emoji: '💜', title: 'Top Rated', sub: 'Best reviewed items' },
            { emoji: '⚡', title: 'Fast Delivery', sub: 'Ships within 24 hours' },
            { emoji: '🔒', title: 'Secure', sub: 'Safe & encrypted payments' },
          ].map((f, i) => (
            <TouchableOpacity key={i} style={styles.featureCard} onPress={() => router.push('/(tabs)/products')}>
              <Text style={styles.featureEmoji}>{f.emoji}</Text>
              <Text style={styles.featureTitle}>{f.title}</Text>
              <Text style={styles.featureSub}>{f.sub}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Banner */}
        <View style={styles.banner}>
          <Text style={styles.bannerLabel}>LIMITED TIME</Text>
          <Text style={styles.bannerTitle}>Special Offer</Text>
          <Text style={styles.bannerSub}>Check out our latest products at amazing prices</Text>
          <TouchableOpacity style={styles.bannerBtn} onPress={() => router.push('/(tabs)/products')}>
            <Text style={styles.bannerBtnText}>Browse All →</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.bg },
  hero: { padding: 24, paddingTop: 36 },
  greeting: { color: COLORS.accentLight, fontSize: 13, fontWeight: '700', letterSpacing: 0.5, marginBottom: 8 },
  heroTitle: {
    color: COLORS.text, fontSize: 52, fontWeight: '900',
    letterSpacing: -1.5, lineHeight: 56, marginBottom: 14,
  },
  heroSub: { color: COLORS.muted, fontSize: 15, lineHeight: 23, marginBottom: 28, maxWidth: 260 },
  heroBtn: {
    backgroundColor: COLORS.accent, paddingVertical: 14, paddingHorizontal: 28,
    borderRadius: 8, alignSelf: 'flex-start',
  },
  heroBtnText: { color: '#fff', fontWeight: '800', fontSize: 15 },
  featureGrid: {
    flexDirection: 'row', flexWrap: 'wrap',
    paddingHorizontal: 16, gap: 12, marginBottom: 24,
  },
  featureCard: {
    width: '47%', backgroundColor: COLORS.surface, borderWidth: 1,
    borderColor: COLORS.border, borderRadius: 10, padding: 16,
  },
  featureEmoji: { fontSize: 28, marginBottom: 10 },
  featureTitle: { color: COLORS.text, fontSize: 14, fontWeight: '800', marginBottom: 4 },
  featureSub: { color: COLORS.muted, fontSize: 12, lineHeight: 17 },
  banner: {
    marginHorizontal: 20, marginBottom: 40, backgroundColor: COLORS.surface2,
    borderWidth: 1, borderColor: COLORS.accent + '44', borderRadius: 12, padding: 24,
  },
  bannerLabel: { color: COLORS.accentLight, fontSize: 10, fontWeight: '700', letterSpacing: 2, marginBottom: 6 },
  bannerTitle: { color: COLORS.text, fontSize: 26, fontWeight: '900', marginBottom: 8 },
  bannerSub: { color: COLORS.muted, fontSize: 14, lineHeight: 21, marginBottom: 20 },
  bannerBtn: {
    backgroundColor: COLORS.accent, paddingVertical: 12, paddingHorizontal: 24,
    borderRadius: 8, alignSelf: 'flex-start',
  },
  bannerBtnText: { color: '#fff', fontWeight: '800', fontSize: 14 },
});
