import { useState } from 'react'
import './App.css'
import Screen from './Screen'
import Pad from './Pad'

function App() {

  const [expression , setExpression] = useState('')
  const [value, setValue] = useState('0') 
  const [evaluated, setEvaluated] = useState(false)
  

  const buttons = [
    {symbol: 'AC' , id: 'clear'},
    {symbol: '/' , id: 'divide'},
    {symbol: '*' , id: 'multiply'},
    {symbol: '7' , id: 'seven'},
    {symbol: '8' , id: 'eight'},
    {symbol: '9' , id: 'nine'},
    {symbol: '-' , id: 'subtract'},
    {symbol: '4' , id: 'four'},
    {symbol: '5' , id: 'five'},
    {symbol: '6' , id: 'six'},
    {symbol: '+' , id: 'add'},
    {symbol: '1' , id: 'one'},
    {symbol: '2' , id: 'two'},
    {symbol: '3' , id: 'three'},
    {symbol: '=' , id: 'equals'},
    {symbol: '0' , id: 'zero'},
    {symbol: '.' , id: 'decimal'},
  ]

  function handleClick(symbol, operators, digits) {
    if(evaluated === true) {
      setEvaluated(false)
      if(symbol === 'AC') {
        setValue('0')
      setExpression('')
      return
      }
      setExpression(symbol)
      setValue(symbol)
      return
  }
  if(symbol === 'AC') {
      setValue('0')
      setExpression('')
  }
  else if(symbol === '=') {
      const result = eval(expression)
      setValue(result)
      setExpression(expression + '=' + result)
      setEvaluated(true)
  }
  else {
      if(value === '0' && operators.includes(symbol)) {
          setExpression('0'+symbol)
          setValue(symbol)
          return
      }
      if(isNaN(value) && digits.includes(symbol)) {
          setExpression(expression+symbol)
          setValue(symbol)
          return 
      }
      if(!isNaN(value) && operators.includes(symbol)) {
          setExpression(value+symbol)
          setValue(symbol)
          return
      }
      if(value === '0')
      {
          setValue(symbol)
          setExpression(symbol)
      }
      else{
          setValue(value+symbol)
          setExpression(value+symbol)
      }
  }
  }

  return (
    
    <div id="app">
      <Screen value={value} expression={expression} />
      <Pad 
      buttons={buttons} 
      handleClick = {handleClick}
      />
    </div>
  )
}

export default App