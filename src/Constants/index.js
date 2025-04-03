export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];


export const myProjects = [
  {
    title: 'PencilIo - Docs & Diagrams',
    desc: 'Pencil.io is a platform designed for engineering teams to create and edit documents and diagrams, enhancing workflow efficiency.',
    subdesc: 'Built using Next.js, React.js, ConvexDB, ContextAPI, and TypeScript, Pencil.io ensures seamless data synchronization and a smooth user experience. Features include Editor.js for rich text editing and Excalidraw for interactive diagramming.',
    href: 'https://github.com/Murphy2305/Pencil-io',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project1-logo.png',
    logoStyle: {
      backgroundColor: '#0A1622',
      border: '0.2px solid #0F1C2D',
      boxShadow: '0px 0px 50px 0px #1A4A89A0',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      { id: 1, name: 'React.js', path: '/assets/react.svg' },
      { id: 2, name: 'Nextjs', path: '/assets/next.png' },
      { id: 3, name: 'TypeScript', path: '/assets/typescript.png' },
      { id: 4, name: 'ConvexDB', path: '/assets/convexd.png' },
    ],
  },
  {
    title: 'Durbhash - Real-Time Chat App',
    desc: 'Durbhash is a fully deployed, real-time chat application that supports private messaging, group chats, and member management, ensuring secure and efficient communication.',
    subdesc: 'Developed using React.js, Node.js, Express.js, and Socket.IO for real-time interactions. Features include JWT authentication, a clean UI with ChakraUI, and optimized backend performance for handling concurrent users.',
    href: 'https://github.com/Murphy2305/Durbhash',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project2-logo.png',
    logoStyle: {
      backgroundColor: '#0A1622',
      border: '0.2px solid #0F1C2D',
      boxShadow: '0px 0px 50px 0px #1A4A89A0',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      { id: 1, name: 'React.js', path: '/assets/react.svg' },
      { id: 2, name: 'Node.js', path: '/assets/nodejs.png' },
      { id: 3, name: 'Socket.IO', path: '/assets/socketio.png' },
      { id: 4, name: 'MongoDB', path: '/assets/mongodb.png' },
    ],
  },
  {
    title: 'Chalchitra - Video Calling App',
    desc: 'Chalchitra is a real-time video calling application that enables seamless peer-to-peer communication using WebRTC.',
    subdesc: 'Built with Next.js, Socket.IO, and WebRTC, utilizing Simple-Peer for peer-to-peer connections. Integrated WebRTC ICE servers for efficient NAT traversal, ensuring stable and reliable connections across networks.',
    href: 'https://github.com/Murphy2305/VideoChatApp',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project4-logo.png',
    logoStyle: {
      backgroundColor: '#0A1622',
      border: '0.2px solid #0F1C2D',
      boxShadow: '0px 0px 50px 0px #1A4A89A0',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      { id: 1, name: 'WebRTC', path: '/assets/webrtc.png' },
      { id: 2, name: 'Next.js', path: '/assets/next.png' },
      { id: 3, name: 'Socket.IO', path: '/assets/socketio.png' },
      { id: 4, name: 'TypeScript', path: '/assets/typescript.png' },
    ],
  },
  {
    title: 'Ghar - Home Rental Platform',
    desc: 'Ghar is a responsive MERN stack platform for home rentals, allowing users to search for properties, make customized bookings, and wishlist properties for future reference.',
    subdesc: 'Built with React.js, Node.js, Express.js, and MongoDB, Ghar ensures a seamless booking experience. Integrated Redux for state management and JWT for authentication, enhancing both security and performance.',
    href: 'https://github.com/Murphy2305/Ghar',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project3-logo.png',
    logoStyle: {
      backgroundColor: '#0A1622',
      border: '0.2px solid #0F1C2D',
      boxShadow: '0px 0px 50px 0px #1A4A89A0',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      { id: 1, name: 'React.js', path: '/assets/react.svg' },
      { id: 2, name: 'Node.js', path: '/assets/nodejs.png' },
      { id: 3, name: 'Redux', path: '/assets/redux.png' },
      { id: 4, name: 'MongoDB', path: '/assets/mongodb.png' },
    ],
  },
];



export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -3.8, 0] : [0.25, -5.1, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [8, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-12,15,0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -10, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Zonbase Inc.',
    pos: 'Front-End Developer Intern ',
    duration: 'Jul 2024 – Sep 2024',
    title: "Built and optimized a blog module with ReactJS and WordPress APIs. Added pagination, detailed post views, and UI components. Ensured smooth performance and responsiveness.",
    icon: '/assets/Zonbase.png',
    animation: 'Waving',
  },
  {
    id: 2,
    name: 'E-SFS Eduventures',
    pos: 'Educator',
    duration: 'Nov 2023 – Apr 2024',
    title: "Mentored students in frontend development through daily sessions. Conducted live sessions, exercises, and personalized support. Guided projects to enhance problem-solving skills.",
    icon: '/assets/sfs.png',
    animation: 'Waving',
  },
 
];