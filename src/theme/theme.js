export const theme = {
  colors: {
    primary: '#2563eb',
    primaryLight: '#60a5fa',
    primaryDark: '#1d4ed8',
    secondary: '#818cf8',
    text: {
      primary: '#1e293b',
      secondary: '#64748b',
    },
    background: {
      primary: '#ffffff',
      secondary: '#f8fafc',
      gradient: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
    },
  },
  typography: {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
  },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
    '2xl': '4rem',
    '3xl': '6rem',
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
  shadows: {
    sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
  },
  animations: {
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    duration: {
      fast: '150ms',
      normal: '300ms',
      slow: '500ms',
    },
  },
  borderRadius: {
    sm: '0.375rem',
    md: '0.5rem',
    lg: '1rem',
    xl: '1.5rem',
    full: '9999px',
  },
};
