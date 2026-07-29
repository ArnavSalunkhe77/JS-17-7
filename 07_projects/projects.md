# Project related to DOM

## Project Link
[click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)


# Solution Code

## Project 1 

```javascript
    const buttons = document.querySelectorAll('.button');
    const body = document.querySelector('body');

    buttons.forEach((button)=>{
        button.addEventListener('click' , (e)=>{
            if(e.target.id === 'grey') body.style.backgroundColor = 'grey';
            else if(e.target.id === 'white') body.style.backgroundColor = 'white';
            else if(e.target.id === 'blue') body.style.backgroundColor = 'blue';
            else if(e.target.id === 'yellow') body.style.backgroundColor = 'yellow';
        })
    })
```

# Project - 2

```javascript
    const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }
});


```