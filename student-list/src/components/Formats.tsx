
import React from 'react';
import { StudentTable } from './StudentTable';
import { AddStudent } from './AddStudent';
import type { Student } from '../utils/data';

interface FormatsProps {
  students: Student[];
  setStudents: React.Dispatch<React.SetStateAction<Student[]>>;
}

const Formats: React.FC<FormatsProps> = ({ students, setStudents }) => {
  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <h1 style={styles.title}>🎓 Student Management System</h1>
        <p style={styles.subtitle}>Manage student information easily and efficiently</p>
      </header>

      <div style={styles.content}>
        {/* Left Side: Add Student Form */}
        <div style={styles.leftSide}>
          <div style={styles.formCard}>
            <h2 style={styles.formTitle}>
              <span style={styles.icon}>➕</span> Add New Student
            </h2>
            <AddStudent students={students} setStudents={setStudents} />
          </div>
          
          {/* Simple Stats */}
          <div style={styles.stats}>
            <div style={styles.statItem}>
              <span style={styles.statNumber}>{students.length}</span>
              <span style={styles.statLabel}>Total Students</span>
            </div>
          </div>
        </div>

        {/* Right Side: Students Table */}
        <div style={styles.rightSide}>
          <div style={styles.tableCard}>
            <div style={styles.tableHeader}>
              <h2 style={styles.tableTitle}>
                <span style={styles.icon}>📋</span> Students List
              </h2>
              <span style={styles.badge}>
                {students.length} student{students.length !== 1 ? 's' : ''}
              </span>
            </div>
            <StudentTable students={students} />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>Student Management System © 2026</p>
      </footer>
    </div>
  );
};

// Simple inline styles
const styles = {
  container: {
    fontFamily: "'Arial', sans-serif",
    backgroundColor: '#f8fafc',
    minHeight: '100vh',
    padding: '20px',
    color: '#333',
  },
  header: {
    textAlign: 'center' as const,
    marginBottom: '30px',
    paddingBottom: '20px',
    borderBottom: '2px solid #e2e8f0',
  },
  title: {
    color: '#2d3748',
    fontSize: '2rem',
    margin: '0 0 10px 0',
  },
  subtitle: {
    color: '#718096',
    fontSize: '1rem',
    margin: '0',
  },
  content: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
    '@media (min-width: 768px)': {
      flexDirection: 'row',
    },
  },
  leftSide: {
    flex: '1',
  },
  rightSide: {
    flex: '2',
  },
  formCard: {
    backgroundColor: 'white',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
  },
  formTitle: {
    color: '#2b6cb0',
    fontSize: '1.3rem',
    margin: '0 0 15px 0',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  tableCard: {
    backgroundColor: 'white',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  tableHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '15px',
  },
  tableTitle: {
    color: '#2b6cb0',
    fontSize: '1.3rem',
    margin: '0',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  badge: {
    backgroundColor: '#4299e1',
    color: 'white',
    padding: '5px 12px',
    borderRadius: '20px',
    fontSize: '0.8rem',
    fontWeight: 'bold' as const,
  },
  icon: {
    fontSize: '1.2em',
  },
  stats: {
    display: 'flex',
    gap: '15px',
    flexWrap: 'wrap' as const,
  },
  statItem: {
    backgroundColor: 'white',
    padding: '15px',
    borderRadius: '10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    textAlign: 'center' as const,
    minWidth: '120px',
  },
  statNumber: {
    display: 'block',
    fontSize: '1.8rem',
    fontWeight: 'bold' as const,
    color: '#2b6cb0',
    marginBottom: '5px',
  },
  statLabel: {
    display: 'block',
    fontSize: '0.9rem',
    color: '#718096',
  },
  footer: {
    textAlign: 'center' as const,
    marginTop: '30px',
    paddingTop: '20px',
    borderTop: '1px solid #e2e8f0',
    color: '#718096',
    fontSize: '0.9rem',
  },
};

export default Formats;