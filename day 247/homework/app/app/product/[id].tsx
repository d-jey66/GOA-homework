import { useEffect, useState } from 'react';
import {
  View, Text, StyleSheet, ScrollView, Image,
  ActivityIndicator, TouchableOpacity, Alert,
} from 'react-native';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import axios from 'axios';
import { API_URL, COLORS } from '../../constants/config';

type Product = {
  _id: string; name: string; description: string;
  price: number; category: string; stock: number;
  image: { url: string }; createdAt: string;
};

export default function ProductDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const navigation = useNavigation();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axios.get(`${API_URL}/products/${id}`);
        setProduct(data);
        navigation.setOptions({ title: data.name });
      } catch {
        Alert.alert('Error', 'Product not found');
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id, navigation]);

  if (loading) return (
    <View style={styles.center}><ActivityIndicator size="large" color={COLORS.accent} /></View>
  );

  if (!product) return (
    <View style={styles.center}><Text style={styles.errorText}>Product not found.</Text></View>
  );

  const inStock = product.stock > 0;

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Image */}
        {product.image?.url
          ? <Image source={{ uri: product.image.url }} style={styles.image} />
          : <View style={[styles.image, styles.imagePlaceholder]}><Text style={{ fontSize: 64 }}>📦</Text></View>
        }

        <View style={styles.content}>
          {/* Category & stock */}
          <View style={styles.topRow}>
            <View style={styles.categoryPill}>
              <Text style={styles.categoryText}>{product.category}</Text>
            </View>
            <View style={[styles.stockBadge, !inStock && styles.stockOut]}>
              <Text style={[styles.stockText, !inStock && { color: COLORS.danger }]}>
                {inStock ? `✓ ${product.stock} in stock` : '✕ Out of stock'}
              </Text>
            </View>
          </View>

          <Text style={styles.name}>{product.name}</Text>
          <Text style={styles.price}>${product.price.toFixed(2)}</Text>

          {/* Description */}
          <View style={styles.section}>
            <Text style={styles.sectionLabel}>DESCRIPTION</Text>
            <Text style={styles.description}>{product.description}</Text>
          </View>

          {/* Details */}
          <View style={styles.section}>
            <Text style={styles.sectionLabel}>DETAILS</Text>
            <View style={styles.detailsCard}>
              {[
                { label: 'Category', value: product.category },
                { label: 'Stock', value: `${product.stock} units` },
                { label: 'Price', value: `$${product.price.toFixed(2)}` },
                { label: 'Added', value: new Date(product.createdAt).toLocaleDateString() },
              ].map((d, i) => (
                <View key={i} style={[styles.detailRow, i < 3 && styles.detailBorder]}>
                  <Text style={styles.detailLabel}>{d.label}</Text>
                  <Text style={styles.detailValue}>{d.value}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Bottom CTA */}
      <View style={styles.bottomBar}>
        <View>
          <Text style={styles.bottomLabel}>Total Price</Text>
          <Text style={styles.bottomPrice}>${product.price.toFixed(2)}</Text>
        </View>
        <TouchableOpacity
          style={[styles.addBtn, !inStock && styles.addBtnDisabled]}
          disabled={!inStock}
          onPress={() => Alert.alert('🛒 Added!', `${product.name} added to cart.`)}
          activeOpacity={0.8}
        >
          <Text style={styles.addBtnText}>{inStock ? '🛒 Add to Cart' : 'Out of Stock'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.bg },
  center: { flex: 1, backgroundColor: COLORS.bg, alignItems: 'center', justifyContent: 'center' },
  errorText: { color: COLORS.muted, fontSize: 16 },
  image: { width: '100%', height: 300 },
  imagePlaceholder: { backgroundColor: COLORS.surface2, alignItems: 'center', justifyContent: 'center' },
  content: { padding: 24, paddingBottom: 120 },
  topRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  categoryPill: {
    backgroundColor: COLORS.surface2, borderWidth: 1, borderColor: COLORS.accent + '44',
    paddingHorizontal: 12, paddingVertical: 4, borderRadius: 100,
  },
  categoryText: { color: COLORS.accentLight, fontSize: 11, fontWeight: '700', letterSpacing: 1 },
  stockBadge: {
    backgroundColor: COLORS.success + '22', paddingHorizontal: 12, paddingVertical: 4, borderRadius: 100,
  },
  stockOut: { backgroundColor: COLORS.danger + '22' },
  stockText: { color: COLORS.success, fontSize: 11, fontWeight: '700' },
  name: { color: COLORS.text, fontSize: 28, fontWeight: '900', letterSpacing: -0.5, marginBottom: 8 },
  price: { color: COLORS.accentLight, fontSize: 32, fontWeight: '900', marginBottom: 24 },
  section: { marginBottom: 24 },
  sectionLabel: { color: COLORS.muted, fontSize: 10, fontWeight: '700', letterSpacing: 2, marginBottom: 10 },
  description: { color: '#AAA', fontSize: 15, lineHeight: 24 },
  detailsCard: {
    backgroundColor: COLORS.surface, borderWidth: 1, borderColor: COLORS.border, borderRadius: 10,
  },
  detailRow: { flexDirection: 'row', justifyContent: 'space-between', padding: 14 },
  detailBorder: { borderBottomWidth: 1, borderBottomColor: COLORS.border },
  detailLabel: { color: COLORS.muted, fontSize: 13 },
  detailValue: { color: COLORS.text, fontSize: 13, fontWeight: '700' },
  bottomBar: {
    position: 'absolute', bottom: 0, left: 0, right: 0,
    backgroundColor: COLORS.surface, borderTopWidth: 1, borderTopColor: COLORS.border,
    flexDirection: 'row', alignItems: 'center', padding: 16, gap: 16,
  },
  bottomLabel: { color: COLORS.muted, fontSize: 10, fontWeight: '700', letterSpacing: 1 },
  bottomPrice: { color: COLORS.text, fontSize: 22, fontWeight: '900' },
  addBtn: { flex: 1, backgroundColor: COLORS.accent, paddingVertical: 16, borderRadius: 8, alignItems: 'center' },
  addBtnDisabled: { backgroundColor: COLORS.border },
  addBtnText: { color: '#fff', fontWeight: '800', fontSize: 15 },
});
