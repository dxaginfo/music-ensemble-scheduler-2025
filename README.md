# Music Ensemble Scheduler

A comprehensive web application for scheduling and managing rehearsals for musical groups, including bands, orchestras, choirs, and other ensembles.

## Overview

The Music Ensemble Scheduler is designed to solve common pain points in the music industry related to rehearsal scheduling:

- **Reduced Administrative Burden**: Automate attendance tracking, venue booking, and communication
- **Conflict Prevention**: Automatically detect scheduling conflicts between different groups and venues
- **Enhanced Communication**: Centralized platform for announcements, reminders, and repertoire sharing
- **Resource Management**: Link sheet music, recordings, and equipment lists to specific rehearsals

## Features

### Core Features

- User and group management with role-based permissions
- Calendar interface with recurring event creation
- One-click RSVP system with attendance tracking
- Venue management and availability checking
- Automated email/SMS reminders and notifications
- Repertoire management linked to specific rehearsals
- Attendance reports and analytics
- Mobile-responsive design

### Upcoming Features

- AI-assisted scheduling suggestions
- Dynamic substitution recommendations
- Integration with popular calendar services
- Custom setlist and repertoire tracking
- Enhanced analytics and reporting

## Technology Stack

### Frontend
- React.js with TypeScript
- Redux Toolkit for state management
- Material-UI component library
- FullCalendar for calendar interface

### Backend
- Node.js with Express.js
- PostgreSQL database
- Redis for caching
- JWT authentication
- RESTful API design

### Infrastructure
- Docker containerization
- AWS cloud deployment
- GitHub Actions for CI/CD
- Microservices architecture

## Getting Started

### Prerequisites

- Node.js (v16+)
- npm or yarn
- Docker and Docker Compose
- PostgreSQL (if running locally)
- Redis (if running locally)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/dxaginfo/music-ensemble-scheduler-2025.git
   cd music-ensemble-scheduler-2025
   ```

2. Install dependencies:
   ```
   # Install backend dependencies
   cd backend
   npm install
   
   # Install frontend dependencies
   cd ../frontend
   npm install
   ```

3. Set up environment variables:
   ```
   # Backend
   cp .env.example .env
   
   # Frontend
   cp .env.example .env.local
   ```

4. Start the development environment:
   ```
   # Using Docker
   docker-compose up -d
   
   # Or manually
   # Start backend
   cd backend
   npm run dev
   
   # Start frontend
   cd frontend
   npm start
   ```

5. Access the application:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:8000
   - API Documentation: http://localhost:8000/api-docs

## Development Roadmap

- **Phase 1**: Core user management and basic scheduling
- **Phase 2**: Advanced calendar features and RSVP system
- **Phase 3**: Resource management and integrations
- **Phase 4**: Analytics, reporting, and optimizations

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For questions or support, please open an issue on this repository.