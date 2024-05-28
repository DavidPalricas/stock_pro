
days = 1:30; 
sales = randi([0, 5], 1, 30);  


figure;


subplot(2,1,1); 
bar(days, sales, 'FaceColor', 'green');

title('Red Dress Sales  in the last month'); 
xlabel('Days');
ylabel('Sales Number');
legend('Sales', 'Location', 'northwest'); 
