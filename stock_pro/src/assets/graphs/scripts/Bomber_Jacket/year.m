
months = 1:12; 
sales = randi([0, 200], 1, 12);  


figure;


subplot(2,1,1); 
bar(months, sales, 'FaceColor', 'green');

title('Bomber Jacket Sales  in the last year'); 
xlabel('Months');
ylabel('Sales Number');
legend('Sales', 'Location', 'northwest'); 
