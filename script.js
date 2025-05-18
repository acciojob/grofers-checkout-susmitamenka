const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	const prices = document.querySelectorAll('.price');
      let total = 0;

      prices.forEach(price => {
        total += parseFloat(price.textContent);
      });

      const table = document.getElementById('groceryTable');
      const totalRow = document.createElement('tr');
      totalRow.classList.add('total-row');
      totalRow.innerHTML = `
        <td>Total</td>
        <td>${total.toFixed(2)}</td>
      `;
      table.appendChild(totalRow);
  
};

getSumBtn.addEventListener("click", getSum);

