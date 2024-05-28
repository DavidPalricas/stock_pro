
months = 1:6; 
sales = randi([0, 80], 1, 6);  


figure;


subplot(2,1,1); 
bar(months, sales, 'FaceColor', 'green');

title('Red Dress Sales  in the last 6 months'); 
xlabel('Months');
ylabel('Sales Number');
legend('Sales', 'Location', 'northwest'); 
