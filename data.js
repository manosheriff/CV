const PORTFOLIO_DATA = {
    profileImg: "./Images/Pro1.jpg", 
    name: "Abdelrahman Sherif",
    heroTitle: "Abdelrahman Sherif",
    heroSummary: "Bilingual mechatronics Engineer (AAST-SV) & Frontend Developer. Expert in 3D fabrication, autonomous robotics, and Next.js architecture.",
    contactEmail: "manoosherif@hotmail.com",
    linkedinUrl: "https://linkedin.com/in/asherifyehia",

    experience: [
            {
                role: "Frontend Web Developer",
                company: "Souq Mazad, G.S.T Company",
                year: "Sep 2024 - Sep 2025",
                description: "Developed responsive web applications and secure APIs using Next.js, React, and Node.js."
            },
            {
                role: "Instructor for 3D Printing Workshop",
                company: "AASTMT Smart Village",
                year: "2024",
                description: "Led hands-on training for students on custom 3D printer design, manufacturing, and optimization."
            },
            {
                role: "Keynote Speaker 3D Printing Seminar",
                company: "AASTMT Smart Village",
                year: "2023",
                description: "Presented technical insights on 3D printing principles and advanced mechanical troubleshooting."
            },
            {
                id : "EFX",
                role: "Senior 3D Printing Engineer",
                company: "Freelance",
                year: "Mar 2018 - Present",
                description: "Fabricated and maintained custom 3D printers for over 20 professional projects."
            }
        ],
    education: [
        {
            degree: "Bachelor of Mechatronics Engineering",
            institution: "AASTMT (Smart Village)",
            year: "2021 - 2026",
            description: "Specialized in autonomous robotics, control systems, and mechanical design. Member of the ASME student chapter."
        }
    ],
    certifications: [
        {
            title: "SCAI Finalist - Smart Event Band",
            issuer: "https://scai.sa/",
            date: "2025",
            description: "Developed an AI-powered wearable integrating real-time data processing and sensors to enhance audience engagement at live events.",
            pdfLink:"./documents/SCAI.pdf"
        },
        {
            title: "3D Printing Workshop Instructor",
            issuer: "AAST-SV",
            date: "2023",
            description: "Led hands-on training for students on custom 3D printer design, manufacturing, and optimization.",
            pdfLink:"./documents/Certificate-Instructor-3d printer.pdf"
        },
        {
            title: "ASME EFx 2024 - 2nd Place Winner",
            issuer: "ASME",
            date: "2024",
            description: "Secured 2nd place at ASME EFx Cairo 2024 for innovation and real-world impact with a pneumatic flexible robot for disaster zones.",
            pdfLink:"./documents/EFX.pdf"
        },
        {
            title: "Ghabour Engine overhaul Training",
            issuer: "Ghabour Academy",
            date: "2023",
            description: "Completed intensive training on Ghabour engine systems, diagnostics, and overhaul procedures.",
            pdfLink:"./documents/GHAB1.pdf"
        },
    ],
    // TECHNICAL EVOLUTION (Milestones)
projects: [
    {
        id: "SMART_HOME",
        title: "Smart Home Automation System",
        tag: "IoT & AI",
        date: "Apr 2024",
        description: "Developed a functional system using Raspberry Pi and Home Assistant. Integrated voice-control for appliances and facial recognition for secure door access via a solenoid lock.",
        tech: ["Home Assistant", "Raspberry Pi", "Python", "Face Recognition"]
    },
    {
        id: "VORON",
        title: "High-Speed Budget 3D Printer Build",
        tag: "Fabrication",
        date: "Jun 2024",
        description: "Engineered a cost-effective Voron 2.4 CoreXY printer. Achieved speeds of 400mm/s using Klipper firmware and integrated Wi-Fi for remote web interface control.",
        tech: ["CoreXY", "Voron 2.4", "Klipper", "Wi-Fi"],
        link: "https://www.linkedin.com/posts/asherifyehia_voron-corexy-3dprinting-activity-7424454080120561664-RBA5?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEkWizEBmcjSw36scrw2lpA3Jpq9yFLw4H4"
    },
    {
        id: "ENGINE_PROTOTYPE",
        title: "Air-Pressurized Plastic Engine Prototype",
        tag: "Mechanical Design",
        date: "Jul 2024",
        description: "Designed and built a lightweight plastic engine powered by 50 PSI compressed air. Achieved 4000 RPM with high-tolerance precision and efficient exhaust flow.",
        tech: ["Custom Design", "Compressed Air System", "Mechanical Prototyping"]
    },
    {
        id: "SMART_BAND",
        title: "Smart Event Experience Band",
        tag: "SCAI Finalist",
        date: "Nov 2024",
        description: "Developed an IoT wearable to enhance audience engagement at live events. Finalist at the Saudi Championship for Artificial Intelligence (SCAI).",
        tech: ["Wearable Tech", "IoT", "UX Design"],
        link: "https://www.linkedin.com/posts/asherifyehia_scai-artificialintelligence-aiinnovation-activity-7346064839095529474-dqZA?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEkWizEBmcjSw36scrw2lpA3Jpq9yFLw4H4"
    },
    {
        id: "SOFT_ROBOT",
        title: "Soft Robotic Aid Delivery System",
        tag: "Award Winner",
        date: "May 2024",
        description: "Engineered a pneumatic flexible robot for maneuvering through hazardous disaster zones. Secured 2nd place at ASME EFx Cairo 2024.",
        tech: ["Flexible Robotics", "Pneumatics", "Embedded Systems"],
        link: "https://www.linkedin.com/posts/asherifyehia_asmeefx-asme-efx-activity-7195816297060876288-1x5A?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEkWizEBmcjSw36scrw2lpA3Jpq9yFLw4H4"
    },
    {
        id: "STORAGE_SYSTEM",
        title: "AI-Integrated Smart Storage System",
        tag: "Automation",
        date: "Oct 2024",
        description: "Designed an inventory system using barcode scanning and AI detection for automated logging and real-time report generation.",
        tech: ["Python", "Barcode Scanning", "Machine Learning"]
    },
    {
        id: "GESTURE_ARM",
        title: "Gesture-Controlled Robotic Arm",
        tag: "Computer Vision",
        date: "Aug 2024",
        description: "Built a robotic arm responding to hand gestures via camera input. Used OpenCV for real-time recognition and Arduino for precise motor control.",
        tech: ["Arduino", "OpenCV", "Python", "Servo Motors"]
    },
    {
        id: "CRYPTO_PREDICTION",
        title: "AI-Based Cryptocurrency Prediction Model",
        tag: "Machine Learning",
        date: "Sep 2024",
        description: "Developed a TensorFlow model to forecast market patterns. Achieved 70% accuracy in predicting short-term trends using historical data.",
        tech: ["Python", "TensorFlow", "Machine Learning", "Data Analysis"],
        link: "https://www.linkedin.com/posts/asherifyehia_ai-digitalhub-continuouslearning-activity-7168140943341174784-Hrgc?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEkWizEBmcjSw36scrw2lpA3Jpq9yFLw4H4"
    }
],
    gallery: [
        { 
            id : "EFX",
            title: "ASME Robotics Competition", 
            caption: "Highlights from the Hovercraft and Vine Robot wins at ASME EFx.",
            images: ["./Images/Efx1.jpg", "./Images/Efx2.jpg", "./Images/Efx3.jpg", "./Images/Efx4.jpg", "./Images/Efx5.jpg"],
            link: "https://www.linkedin.com/posts/coe-sv-aastmt_coesvaastmt-coeabraastmtsv-egypt-ugcPost-7195743791926931456-UHEl?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEkWizEBmcjSw36scrw2lpA3Jpq9yFLw4H4" 
        },
        { 
            id: "VORON",
            title: "Voron 2.4 High-Speed Build", 
            caption: "Highlights from the Voron 2.4 CoreXY printer build and Klipper optimization.",
            images: [
                "./Images/voron1.jpg", 
                "./Images/voron2.jpg",
                "./Images/voron3.jpg", 
                "./Images/voron4.jpg",
            ], 
            link: "https://www.linkedin.com/posts/asherifyehia_voron-corexy-3dprinting-activity-7424454080120561664-RBA5?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEkWizEBmcjSw36scrw2lpA3Jpq9yFLw4H4" 
        },
        {
            id: "instructor_workshop",
            title: "3D Printing Workshop Instructor", 
            caption: "Snapshots from the 3D printing workshop I instructed at AAST-SV.",
            images: [
                "./Images/Seminar1.jpg",
                "./Images/Seminar2.jpg",
                "./Images/Seminar3.jpg",
                "./Images/Seminar4.jpg"
            ]
        },
        { 
            id: "SMART_BAND",
            title: "Smart Event Experience Band", 
            caption: "AI-powered wearable integrating real-time data processing and sensors to enhance audience engagement at live events.",
            images: [
                "./Images/band1.jpg", 
                "./Images/BAND2.jpg"
            ], 
            link: "https://www.linkedin.com/in/asherifyehia" 
        },
        {
            id: "I3 Style 3D Printer",
            title: "I3 Style 3D Printer",
            caption: "Custom-built I3-style 3D printer with enhanced precision and reliability.",
            images: [
                "./Images/ESCALOP1.jpg",
                "./Images/ESCALOP2.jpg",
                "./Images/ESCALOP3.jpg",
                "./Images/ESCALOP4.jpg",
                "./Images/ESCALOP5.jpg"
            ],
            link: "https://www.linkedin.com/in/asherifyehia"
        },
        {
            id: "WORKSHOP_3D_PRINTER",
            title: "Workshop - 3D Printer Fabrication",
            caption: "Hands-on workshop covering the design and fabrication of 3D printers.",
            images: [
                "./Images/workshop1.jpg",
                "./Images/workshop2.jpg",
                "./Images/workshop3.jpg"
            ],
            link: "https://www.linkedin.com/in/asherifyehia"
        }
    ],

    skills: [
        { name: "React", icon: "<i class='fab fa-react'></i>", level: 3 },
        { name: "Next.js", icon: "<i class='fab fa-node-js'></i>", level: 3 },
        { name: "JavaScript", icon: "<i class='fab fa-js-square'></i>", level: 3 },
        { name: "3D Design", icon: "<i class='fas fa-cube'></i>", level: 5 },
        { name: "CAD/CAM", icon: "<i class='fas fa-drafting-compass'></i>", level: 5 },
        { name: "Semiconductors", icon: "<i class='fas fa-microchip'></i>", level: 5 },
        { name: "Python", icon: "<i class='fab fa-python'></i>", level: 5 },
        { name: "Robotics", icon: "<i class='fas fa-robot'></i>", level: 5 },
        { name: "HTML/CSS", icon: "<i class='fab fa-html5'></i>", level: 3 },
        { name: "Node.js", icon: "<i class='fab fa-node-js'></i>", level: 2 },
        { name: "MongoDB", icon: "<i class='fas fa-database'></i>", level: 2 },
        { name: "OpenCV", icon: "<i class='fas fa-eye'></i>", level: 5 },
        { name: "solidworks", icon: "<i class='fas fa-cogs'></i>", level: 5 },
        { name: "microsoft office", icon: "<i class='fas fa-file-alt'></i>", level: 5 },
        { name: "MATLAB", icon: "<i class='fas fa-calculator'></i>", level: 4 },
        { name: "3D printer fabrication", icon: "<i class='fas fa-print'></i>", level: 5 },
        { name: "social skills", icon: "<i class='fas fa-users'></i>", level: 5 },
        { name: "vfx editing", icon: "<i class='fas fa-video'></i>", level: 1 }
    ]
};
