import { useState, useEffect, useCallback } from 'react';
import {
  View, Text, FlatList, StyleSheet,
  TouchableOpacity, TextInput, Image, ActivityIndicator, RefreshControl,
} from 'react-native';
import axios from 'axios';
import { router } from 'expo-router';
import { API_URL, COLORS } from '../../constants/config';

type Product = {
  _id: string; name: string; description: string;
  price: number; category: string; stock: number;
  image: { url: string; publicId: string };
};

const ProductCard = ({ item, onPress }: { item: Product; onPress: () => void }) => (
  <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.85}>
    {item.image?.url
      ? <Image source={{ uri: item.image.url }} style={styles.cardImage} />
      : <View style={[styles.cardImage, styles.cardImagePlaceholder]}><Text style={{ fontSize: 36 }}>📦</Text></View>
    }
    <View style={styles.cardBody}>
      <View style={styles.categoryPill}>
        <Text style={styles.categoryText}>{item.category}</Text>
      </View>
      <Text style={styles.cardName} numberOfLines={1}>{item.name}</Text>
      <Text style={styles.cardDesc} numberOfLines={2}>{item.description}</Text>
      <View style={styles.cardFooter}>
        <Text style={styles.cardPrice}>${item.price.toFixed(2)}</Text>
        <View style={[styles.stockBadge, item.stock <= 5 && styles.stockLow]}>
          <Text style={styles.stockText}>{item.stock > 0 ? `${item.stock} left` : 'Out of stock'}</Text>
        </View>
      </View>
    </View>
  </TouchableOpacity>
);

export default function ProductsScreen() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [search, setSearch] = useState('');

  const fetchProducts = useCallback(async (q = '') => {
    try {
      const { data } = await axios.get(`${API_URL}/products${q ? `?search=${q}` : ''}`);
      setProducts(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  useEffect(() => { fetchProducts(); }, [fetchProducts]);

  useEffect(() => {
    const timer = setTimeout(() => fetchProducts(search), 400);
    return () => clearTimeout(timer);
  }, [search, fetchProducts]);

  const onRefresh = () => { setRefreshing(true); fetchProducts(search); };

  if (loading) return (
    <View style={styles.center}>
      <ActivityIndicator size="large" color={COLORS.accent} />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchBox}>
        <Text style={{ fontSize: 16 }}>🔍</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Search products..."
          placeholderTextColor={COLORS.muted}
          value={search}
          onChangeText={setSearch}
        />
        {search ? (
          <TouchableOpacity onPress={() => setSearch('')}>
            <Text style={{ color: COLORS.muted, fontSize: 18 }}>✕</Text>
          </TouchableOpacity>
        ) : null}
      </View>

      <FlatList
        data={products}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <ProductCard item={item} onPress={() => router.push(`/product/${item._id}`)} />
        )}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor={COLORS.accent} />}
        ListEmptyComponent={
          <View style={styles.center}>
            <Text style={{ fontSize: 48 }}>📭</Text>
            <Text style={styles.emptyText}>No products found</Text>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.bg },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center', paddingTop: 80, gap: 12 },
  searchBox: {
    flexDirection: 'row', alignItems: 'center', gap: 10,
    backgroundColor: COLORS.surface, margin: 16, borderRadius: 10,
    paddingHorizontal: 14, paddingVertical: 12,
    borderWidth: 1, borderColor: COLORS.border,
  },
  searchInput: { flex: 1, color: COLORS.text, fontSize: 15 },
  list: { paddingHorizontal: 16, paddingBottom: 24, gap: 16 },
  card: {
    backgroundColor: COLORS.surface, borderRadius: 12,
    borderWidth: 1, borderColor: COLORS.border, overflow: 'hidden',
  },
  cardImage: { width: '100%', height: 180 },
  cardImagePlaceholder: {
    backgroundColor: COLORS.surface2, alignItems: 'center', justifyContent: 'center',
  },
  cardBody: { padding: 14 },
  categoryPill: {
    alignSelf: 'flex-start', backgroundColor: COLORS.surface2, borderWidth: 1,
    borderColor: COLORS.accent + '44', paddingHorizontal: 10, paddingVertical: 3,
    borderRadius: 100, marginBottom: 8,
  },
  categoryText: { color: COLORS.accentLight, fontSize: 10, fontWeight: '700', letterSpacing: 1 },
  cardName: { color: COLORS.text, fontSize: 17, fontWeight: '800', marginBottom: 4 },
  cardDesc: { color: COLORS.muted, fontSize: 13, lineHeight: 19, marginBottom: 12 },
  cardFooter: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  cardPrice: { color: COLORS.text, fontSize: 20, fontWeight: '900' },
  stockBadge: {
    backgroundColor: COLORS.success + '22', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 100,
  },
  stockLow: { backgroundColor: COLORS.danger + '22' },
  stockText: { color: COLORS.success, fontSize: 11, fontWeight: '700' },
  emptyText: { color: COLORS.muted, fontSize: 16 },
});
