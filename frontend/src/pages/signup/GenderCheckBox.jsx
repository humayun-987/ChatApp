import React from 'react'

const GenderCheckBox = () => {
    return (
        <div className='flex mt-1 gap-2'>
            <div className="form-control">
                <label className="label cursor-pointer flex gap-2">
                    <span className="label-text">Male</span>
                    <input type="checkbox" defaultChecked className="checkbox checkbox-primary" />
                </label>
            </div>
            <div className="form-control">
                <label className="label cursor-pointer flex gap-2">
                    <span className="label-text">Female</span>
                    <input type="checkbox" defaultChecked className="checkbox checkbox-primary" />
                </label>
            </div>
        </div>
    )
}

export default GenderCheckBox

// Taken this checkbox from daisyUI

{/* <div className="form-control">
        <label className="label cursor-pointer flex gap-2">
            <span className="label-text">Female</span>
            <input type="checkbox" defaultChecked className="checkbox checkbox-primary" />
        </label>
    </div> */}