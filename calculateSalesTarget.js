// Function to calculate the daily sales target and total target sales
function calculateSalesTarget(startDate, endDate, monthlySalesTarget) {
    const workingDays = getWorkingDays(startDate, endDate);
    const dailySalesTarget = monthlySalesTarget / workingDays;
    const totalTargetSales = dailySalesTarget * workingDays;
  
    console.log('Daily Sales Target:', dailySalesTarget.toFixed(2));
    console.log('Total Target Sales:', totalTargetSales.toFixed(2));
  }
  
  
  function getWorkingDays(startDate, endDate) {
    const oneDay = 24 * 60 * 60 * 1000;
    let workingDays = 0;
    let currentDate = new Date(startDate);
  
    while (currentDate <= endDate) {
      const dayOfWeek = currentDate.getDay();
  
      if (dayOfWeek !== 0 && dayOfWeek !== 5) { 
        workingDays++;
      }
  
      currentDate.setTime(currentDate.getTime() + oneDay);
    }
  
    return workingDays;   
  }
  
  
  const startDate = new Date('2023-01-01');
  const endDate = new Date('2023-01-0');
  const monthlySalesTarget = 435;
  
  calculateSalesTarget(startDate, endDate, monthlySalesTarget);