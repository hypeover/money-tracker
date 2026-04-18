'use client'
import React from 'react'

const InputNumber = () => {
  return (
	<>
		<span className="NumberFlowInput_number_flow_input_root___V74U" style={{display: 'inline-flex'}} >
			<span className='NumberFlowInput_number_flow_input_wrapper__MNWTs' style={{display: 'inline-flex', overflow: 'hidden'}}>
				<span contentEditable="true" inputMode='decimal' className='NumberFlowInput_number_flow_input__vuMGV' data-placeholder="0" style={{minWidth: '1ch', padding: '0px'}}></span>
				<input type="number" maxLength={15} readOnly tabIndex={-1} className='NumberFlowInput_real_input__doEEK'/>
			</span>
		</span>
	</>
  )
}

export default InputNumber
