import { Card, CardContent, Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import Chart from 'chart.js/auto';
import { Doughnut, Bar } from 'react-chartjs-2';

function DoughnutChart() {
    const data = {
        labels: [
          'Red',
          'Blue',
          'Yellow'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [300, 50, 100],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
        }]
    };
    
    return (
        <div style={{ height: '30vh', width: '30vw' }}>
            <Doughnut data={data} />
        </div>
    );
}

function MyBarChart() {
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    const data = {
        labels: labels,
        datasets: [{
          label: 'My First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
          ],
          borderWidth: 1
        }]
    };
    return (
        <div >
            <Bar data={data} />
        </div>
    )

}

function RecentExpensesTable() {
    const tableHeader = [
        {
            id: 1,
            text: 'Date',
            width: '15%',
        },
        {
            id: 2,
            text: 'Category',
            width: '15%',
        },
        {   
            id: 3,
            text: 'Description',
            width: '50%',
        },
        {
            id: 4,
            text: 'Amount',
            width: '20%',
        }
    ]
    const tableData = [
        ['2021-10-01', 'Food', 'Bananas, Yogurt, Bell Peppers, Clorox Wipes', '$100.00'],
        ['2021-10-02', 'Transportation', 'Bus Fare traveling from Bag End to Rivendale', '$5.00'],
        ['2021-10-03', 'Food', 'Lunch at Gustavos', '$10.00'],
        ['2021-10-04', 'Food', 'Dinner at Texas Road House', '$20.00'],
        ['2021-10-05', 'Transportation', 'Gas for the van', '$30.00'],
    ]
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow sx={{ color: 'primary' }}>
                        {tableHeader.map((header) => (
                            <TableCell  width={header.width} key={header.id}>{header.text}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tableData.map((row) => (
                        <TableRow key={row[0]}>
                            {row.map((cell) => (
                                <TableCell key={cell}>{cell}</TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

function DashboardCard({ title, text, color='primary' }) {
    const colors = ['primary', 'secondary', 'error'];
    if (!colors.includes(color)) {
        color = 'primary';
    }
    return (
        <Card sx={{ minWidth: 150, width: '30%' }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" >
                    {title}
                </Typography>
                <Typography color={color} fontWeight={500} fontSize={18} >
                    {text}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default function Dashboard() {
    const balance = '$1000.00';
    const income = '$500.00';
    const expenses = '$300.00';
    return (
        <Box sx={{ padding: 2 }}>
            <Typography variant='h4' sx={{ml: 0, pb: 3}}>Dashboard</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <DashboardCard title="Balance" text={balance} color='primary'/>
                <DashboardCard title="Income" text={income} color='secondary'/>
                <DashboardCard title="Expenses" text={expenses} color='error' />
            </Box>
            <Box sx={{ paddingTop: 2 }}>
                <h2>Expenses by Category</h2>
                <MyBarChart />
            </Box>
            <Box sx={{ paddingTop: 2 }}>
                <h2>Recent Expenses</h2>
                <RecentExpensesTable />
            </Box>
        </Box>
    )
}