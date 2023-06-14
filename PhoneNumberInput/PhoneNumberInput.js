// Custom PhoneNumberInput component with below scenarios: -
// 1. only accepts numerical digits
// 2. format the number automatically as (123)456-7890 by
// 3. adding the parenthesis when the 4th digit is entered
// 4. adding - before 7th digit

import React, {useState} from 'react'
export function PhoneNumberInput() {
  let [value,setValue] = useState<string>("");
  let formatNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
    let curr = event.currentTarget.value.replace(/\D/g,'');
    if(curr.length > 10) curr = curr.slice(0,10)
    if(curr.length > 6) curr = `${curr.slice(0,6)}-${curr.slice(6)}`
    if(curr.length > 3) curr = `(${curr.slice(0,3)})${curr.slice(3)}`
    setValue(curr);
  } 
  return <input value={value} onChange={formatNumber}/>
}
