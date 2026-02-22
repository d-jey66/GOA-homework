import { Tabs } from 'expo-router';
import { Text } from 'react-native';
import { COLORS } from '../../constants/config';

const Icon = ({ emoji, label, focused }: { emoji: string; label: string; focused: boolean }) => (
  <>
    <Text style={{ fontSize: 20 }}>{emoji}</Text>
    <Text style={{ fontSize: 10, fontWeight: '700', color: focused ? COLORS.accentLight : COLORS.muted, marginTop: 2 }}>
      {label}
    </Text>
  </>
);

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: { backgroundColor: COLORS.bg },
        headerTintColor: COLORS.accentLight,
        headerTitleStyle: { color: COLORS.text, fontWeight: '900', fontSize: 20 },
        headerShadowVisible: false,
        tabBarStyle: {
          backgroundColor: COLORS.bg,
          borderTopColor: COLORS.border,
          borderTopWidth: 1,
          height: 72,
          paddingBottom: 8,
        },
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => <Icon emoji="🏠" label="Home" focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="products"
        options={{
          title: 'Products',
          tabBarIcon: ({ focused }) => <Icon emoji="📦" label="Products" focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused }) => <Icon emoji="👤" label="Profile" focused={focused} />,
        }}
      />
    </Tabs>
  );
}
