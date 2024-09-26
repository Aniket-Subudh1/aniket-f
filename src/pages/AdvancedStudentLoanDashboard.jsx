'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import LinearProgress from '@mui/material/LinearProgress';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import { Info as InfoIcon } from '@mui/icons-material';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
} from 'recharts';
import NavbarD from '../components/Navbars/NavbarD'; // Adjust the path as needed

// Mock data (replace with actual data or API calls)
const mockLoanStatus = {
  status: 'Active',
  amount: 10000,
  interestRate: 5.5,
  term: 48,
  startDate: '2023-01-01',
  currentBalance: 8500,
};

const mockLoanHistory = [
  { date: '2023-01', balance: 10000 },
  { date: '2023-02', balance: 9750 },
  { date: '2023-03', balance: 9500 },
  { date: '2023-04', balance: 9250 },
  { date: '2023-05', balance: 9000 },
  { date: '2023-06', balance: 8750 },
];

const mockFAQs = [
  {
    question: 'How do I apply for a loan?',
    answer:
      'Fill out the loan application form with your desired loan amount, term, and purpose.',
  },
  {
    question: 'When do I need to start repaying my loan?',
    answer: 'Repayment typically begins one month after the loan is disbursed.',
  },
  {
    question: 'What happens if I miss a payment?',
    answer:
      'Missing a payment may result in late fees and could negatively impact your credit score. Contact us immediately if you are having trouble making payments.',
  },
  {
    question: 'Can I pay off my loan early?',
    answer: 'Yes, you can pay off your loan early without any prepayment penalties.',
  },
];

const MotionCard = motion(Card);

export default function AdvancedStudentLoanDashboard() {
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [activeTab, setActiveTab] = useState('status');
  const [loanAmount, setLoanAmount] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);

  // State variables for form inputs
  const [applicationLoanAmount, setApplicationLoanAmount] = useState('');
  const [applicationLoanTerm, setApplicationLoanTerm] = useState('');
  const [loanPurpose, setLoanPurpose] = useState('');
  const [paymentAmount, setPaymentAmount] = useState('');

  useEffect(() => {
    if (loanAmount && loanTerm && parseInt(loanTerm) !== 0) {
      const amount = parseFloat(loanAmount);
      const term = parseInt(loanTerm);
      const interestRate = 5.5 / 100 / 12;
      const monthlyPayment =
        (amount * interestRate * Math.pow(1 + interestRate, term)) /
        (Math.pow(1 + interestRate, term) - 1);
      const totalInterest = monthlyPayment * term - amount;

      setMonthlyPayment(monthlyPayment);
      setTotalInterest(totalInterest);
    } else {
      setMonthlyPayment(0);
      setTotalInterest(0);
    }
  }, [loanAmount, loanTerm]);

  const connectWallet = () => {
    setIsWalletConnected(true);
    addNotification('success', 'Wallet connected successfully!');
  };

  const submitLoanApplication = (e) => {
    e.preventDefault();
    // Use applicationLoanAmount, applicationLoanTerm, and loanPurpose here
    addNotification('info', 'Loan application submitted successfully!');
  };

  const makePayment = (amount) => {
    if (amount && amount > 0) {
      addNotification('success', `Payment of $${amount} made successfully!`);
    } else {
      addNotification('error', 'Please enter a valid payment amount.');
    }
  };

  const addNotification = (type, message) => {
    const newNotification = { id: Date.now(), type, message };
    setNotifications((prev) => [newNotification, ...prev]);
    setTimeout(() => {
      setNotifications((prev) => prev.filter((n) => n.id !== newNotification.id));
    }, 5000);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'status': {
        const progressValue =
          ((mockLoanStatus.amount - mockLoanStatus.currentBalance) / mockLoanStatus.amount) * 100;
        return (
          <MotionCard
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            style={{ maxWidth: '800px', margin: '0 auto' }}
          >
            <CardHeader
              title="Loan Status"
              subheader="Current loan details and repayment progress"
            />
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12} container justifyContent="space-between" alignItems="center">
                  <Typography>Status:</Typography>
                  <Typography>{mockLoanStatus.status}</Typography>
                </Grid>
                <Grid item xs={12} container justifyContent="space-between" alignItems="center">
                  <Typography>Loan Amount:</Typography>
                  <Typography>${mockLoanStatus.amount.toLocaleString()}</Typography>
                </Grid>
                <Grid item xs={12} container justifyContent="space-between" alignItems="center">
                  <Typography>Interest Rate:</Typography>
                  <Typography>{mockLoanStatus.interestRate}%</Typography>
                </Grid>
                <Grid item xs={12} container justifyContent="space-between" alignItems="center">
                  <Typography>Term:</Typography>
                  <Typography>{mockLoanStatus.term} months</Typography>
                </Grid>
                <Grid item xs={12} container justifyContent="space-between" alignItems="center">
                  <Typography>Start Date:</Typography>
                  <Typography>{mockLoanStatus.startDate}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography>Repayment Progress</Typography>
                  <LinearProgress variant="determinate" value={progressValue} />
                </Grid>
              </Grid>
            </CardContent>
          </MotionCard>
        );
      }
      case 'apply': {
        return (
          <MotionCard
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            style={{ maxWidth: '800px', margin: '0 auto' }}
          >
            <CardHeader title="Loan Application" subheader="Apply for a new student loan" />
            <CardContent>
              <form onSubmit={submitLoanApplication}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      id="loanAmount"
                      label="Loan Amount"
                      type="number"
                      placeholder="Enter loan amount"
                      required
                      fullWidth
                      value={applicationLoanAmount}
                      onChange={(e) => setApplicationLoanAmount(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="loanTerm"
                      label="Loan Term (months)"
                      type="number"
                      placeholder="Enter loan term"
                      required
                      fullWidth
                      value={applicationLoanTerm}
                      onChange={(e) => setApplicationLoanTerm(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl fullWidth>
                      <InputLabel id="loanPurpose-label">Loan Purpose</InputLabel>
                      <Select
                        labelId="loanPurpose-label"
                        id="loanPurpose"
                        label="Loan Purpose"
                        value={loanPurpose}
                        onChange={(e) => setLoanPurpose(e.target.value)}
                      >
                        <MenuItem value="tuition">Tuition</MenuItem>
                        <MenuItem value="living">Living Expenses</MenuItem>
                        <MenuItem value="books">Books and Supplies</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <Button type="submit" fullWidth variant="contained" color="primary">
                      Submit Application
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
          </MotionCard>
        );
      }
      case 'repay': {
        return (
          <MotionCard
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            style={{ maxWidth: '800px', margin: '0 auto' }}
          >
            <CardHeader title="Loan Repayment" subheader="Make a payment towards your loan" />
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12} container justifyContent="space-between" alignItems="center">
                  <Typography>Current Balance:</Typography>
                  <Typography>${mockLoanStatus.currentBalance.toLocaleString()}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="paymentAmount"
                    label="Payment Amount"
                    type="number"
                    placeholder="Enter payment amount"
                    fullWidth
                    value={paymentAmount}
                    onChange={(e) => setPaymentAmount(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    onClick={() => makePayment(parseFloat(paymentAmount))}
                    fullWidth
                    variant="contained"
                    color="primary"
                  >
                    Make Payment
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </MotionCard>
        );
      }
      case 'history': {
        return (
          <MotionCard
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            style={{ maxWidth: '800px', margin: '0 auto' }}
          >
            <CardHeader
              title="Loan History"
              subheader="Transaction history for your loan"
            />
            <CardContent>
              <div style={{ height: 300, marginBottom: 16 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={mockLoanHistory}>
                    <defs>
                      <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(0, 0, 0, 0.1)" />
                    <XAxis dataKey="date" stroke="#000" />
                    <YAxis stroke="#000" />
                    <RechartsTooltip
                      contentStyle={{
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        border: 'none',
                        borderRadius: '4px',
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="balance"
                      stroke="#3b82f6"
                      fillOpacity={1}
                      fill="url(#colorBalance)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Balance</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {mockLoanHistory.map((transaction, index) => (
                    <TableRow key={index}>
                      <TableCell>{transaction.date}</TableCell>
                      <TableCell>${transaction.balance.toLocaleString()}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </MotionCard>
        );
      }
      case 'help': {
        return (
          <MotionCard
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            style={{ maxWidth: '800px', margin: '0 auto' }}
          >
            <CardHeader
              title="Help & FAQs"
              subheader="Frequently asked questions about student loans"
            />
            <CardContent>
              <div>
                {mockFAQs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <details>
                      <summary style={{ cursor: 'pointer', fontWeight: 'bold' }}>
                        {faq.question}
                      </summary>
                      <Typography variant="body2" style={{ marginTop: 8 }}>
                        {faq.answer}
                      </Typography>
                    </details>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </MotionCard>
        );
      }
      default:
        return null;
    }
  };

  return (
    <div style={{ minHeight: '100vh', padding: 16, display: 'flex', flexDirection: 'column' }}>
      {/* Navbar with props */}
      <NavbarD
        isWalletConnected={isWalletConnected}
        connectWallet={connectWallet}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <div style={{ flex: 1, marginTop: '80px' }}>
        <motion.h1
          style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '1rem' }}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Student Loan Dashboard
        </motion.h1>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
          >
            {renderTabContent()}
          </motion.div>
        </AnimatePresence>

        <MotionCard
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          style={{ marginTop: 32, maxWidth: '800px', margin: '32px auto 0' }}
        >
          <CardHeader
            title="Loan Calculator"
            subheader="Estimate your monthly payments"
          />
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  id="calcLoanAmount"
                  label="Loan Amount"
                  type="number"
                  placeholder="Enter loan amount"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(e.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="calcLoanTerm"
                  label="Loan Term (months)"
                  type="number"
                  placeholder="Enter loan term"
                  value={loanTerm}
                  onChange={(e) => setLoanTerm(e.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} container justifyContent="space-between" alignItems="center">
                <Typography>Estimated Monthly Payment</Typography>
                <Tooltip title="This is an estimate based on a 5.5% annual interest rate.">
                  <IconButton>
                    <InfoIcon />
                  </IconButton>
                </Tooltip>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6">
                  ${monthlyPayment ? monthlyPayment.toFixed(2) : '0.00'}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>Total Interest</Typography>
                <Typography variant="h6">
                  ${totalInterest ? totalInterest.toFixed(2) : '0.00'}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </MotionCard>
      </div>

      <motion.div
        style={{ position: 'fixed', bottom: 16, right: 16, maxWidth: 400 }}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <AnimatePresence>
          {notifications.map((notification) => (
            <motion.div
              key={notification.id}
              initial={{ opacity: 0, y: 50, scale: 0.3 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
            >
              <Alert
                severity={notification.type === 'success' ? 'success' : notification.type}
                style={{ marginBottom: 8 }}
              >
                <AlertTitle>
                  {notification.type.charAt(0).toUpperCase() + notification.type.slice(1)}
                </AlertTitle>
                {notification.message}
              </Alert>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
