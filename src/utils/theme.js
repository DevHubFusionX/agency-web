// Theme configuration and utilities

export const theme = {
  colors: {
    primary: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8',
      800: '#1e40af',
      900: '#1e3a8a',
      950: '#172554'
    },
    secondary: {
      50: '#f8fafc',
      100: '#f1f5f9',
      200: '#e2e8f0',
      300: '#cbd5e1',
      400: '#94a3b8',
      500: '#64748b',
      600: '#475569',
      700: '#334155',
      800: '#1e293b',
      900: '#0f172a'
    },
    accent: {
      blue: '#0ea5e9',
      lightBlue: '#38bdf8',
      navy: '#1e40af',
      sky: '#0284c7'
    },
    status: {
      success: '#10b981',
      warning: '#f59e0b',
      error: '#ef4444',
      info: '#3b82f6'
    }
  },
  
  gradients: {
    primary: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
    secondary: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)',
    light: 'linear-gradient(135deg, #eff6ff 0%, #ffffff 100%)',
    hero: 'linear-gradient(135deg, #eff6ff 0%, #ffffff 50%, #eff6ff 100%)'
  },
  
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    blue: '0 10px 25px -5px rgba(59, 130, 246, 0.15)'
  },
  
  borderRadius: {
    sm: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    full: '9999px'
  },
  
  spacing: {
    xs: '0.5rem',
    sm: '0.75rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem'
  },
  
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem'
  },
  
  transitions: {
    fast: '150ms ease-in-out',
    normal: '300ms ease-in-out',
    slow: '500ms ease-in-out'
  }
}

// Utility functions for theme usage
export const getColor = (colorPath) => {
  const keys = colorPath.split('.')
  let value = theme.colors
  
  for (const key of keys) {
    value = value[key]
    if (!value) return null
  }
  
  return value
}

export const getGradient = (gradientName) => {
  return theme.gradients[gradientName] || null
}

export const getShadow = (shadowName) => {
  return theme.shadows[shadowName] || null
}

// CSS-in-JS style generators
export const buttonStyles = {
  primary: {
    background: theme.gradients.primary,
    color: '#ffffff',
    border: 'none',
    padding: `${theme.spacing.sm} ${theme.spacing.lg}`,
    borderRadius: theme.borderRadius.lg,
    fontWeight: '600',
    transition: `all ${theme.transitions.normal}`,
    boxShadow: theme.shadows.md
  },
  
  secondary: {
    background: '#ffffff',
    color: theme.colors.primary[600],
    border: `2px solid ${theme.colors.primary[600]}`,
    padding: `${theme.spacing.sm} ${theme.spacing.lg}`,
    borderRadius: theme.borderRadius.lg,
    fontWeight: '600',
    transition: `all ${theme.transitions.normal}`
  },
  
  accent: {
    background: theme.colors.accent.blue,
    color: '#ffffff',
    border: 'none',
    padding: `${theme.spacing.sm} ${theme.spacing.lg}`,
    borderRadius: theme.borderRadius.lg,
    fontWeight: '600',
    transition: `all ${theme.transitions.normal}`
  }
}

export const cardStyles = {
  default: {
    background: '#ffffff',
    borderRadius: theme.borderRadius.xl,
    boxShadow: theme.shadows.md,
    padding: theme.spacing.xl,
    transition: `all ${theme.transitions.normal}`
  },
  
  primary: {
    background: theme.gradients.light,
    border: `1px solid ${theme.colors.primary[100]}`,
    borderRadius: theme.borderRadius.xl,
    padding: theme.spacing.xl
  },
  
  accent: {
    background: '#ffffff',
    borderLeft: `4px solid ${theme.colors.accent.blue}`,
    borderRadius: theme.borderRadius.xl,
    padding: theme.spacing.xl,
    boxShadow: theme.shadows.md
  }
}

export default theme