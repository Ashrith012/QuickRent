# QuickRent - Modern Gadget Rental Platform

QuickRent is a modern, responsive web application built with React.js that provides a seamless platform for renting electronic gadgets. The application features a clean, intuitive interface with smooth animations and a user-friendly design.

## Features

- **Modern UI/UX**: Sleek design with glass-morphism effects and smooth animations
- **Responsive Design**: Fully responsive layout that works perfectly on all devices
- **Component-Based Architecture**: Modular and reusable components for better maintainability
- **Performance Optimized**: Efficient code splitting and lazy loading for optimal performance
- **Smooth Navigation**: Implemented smooth scrolling with section highlighting

## Technical Approach

### Architecture
- Built with React.js for a component-based, maintainable structure
- Styled using styled-components for dynamic and scoped styling
- Animation handled by Framer Motion for smooth, performant animations
- Custom hooks for handling scroll effects and media queries

### Key Components
1. **Theme System**
   - Centralized theme configuration
   - Consistent color palette and spacing
   - Responsive breakpoints

2. **Reusable Components**
   - Button
   - Card
   - Layout components (Section, Container, Grid)
   - Typography components

3. **Feature Sections**
   - Responsive Navbar with mobile menu
   - Hero Banner with engaging animations
   - Features showcase with hover effects
   - Gadget listing with filtering options
   - Contact form with validation

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/Ashrith012/QuickRent.git
cd QuickRent
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npm start
# or
yarn start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser

## Screenshots

##### Home Page
![hero-section](https://github.com/user-attachments/assets/6bc71de2-8684-48c5-a60c-e2f994afec63)

##### Feature Page
![features-section](https://github.com/user-attachments/assets/2736886d-8e82-4746-ad40-e8eafd9feb98)

##### Gadgets Page
![gadgets-section](https://github.com/user-attachments/assets/dfc7e3d9-655d-4456-a8e8-d75fbbc02184)

![gadgets-section-2](https://github.com/user-attachments/assets/e56e4911-2814-40ce-8334-7dcef046938a)

##### Contact Page
![contact-section](https://github.com/user-attachments/assets/b6eeccad-beaf-4a63-a0b9-dc7411b57fa6)


## Live Demo

[Website link will be added when deployed]

## Built With

- [React.js](https://reactjs.org/) - Frontend framework
- [styled-components](https://styled-components.com/) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [React Icons](https://react-icons.github.io/react-icons/) - Icons

## Project Structure

```
src/
├── components/
│   ├── common/         # Reusable components
│   ├── Navbar.js       # Navigation component
│   ├── HeroBanner.js   # Hero section
│   ├── Features.js     # Features section
│   └── ...
├── theme/
│   ├── theme.js        # Theme configuration
│   └── GlobalStyle.js  # Global styles
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
└── App.js             # Main application component
```

## Contributing

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
