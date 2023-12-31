import React from 'react';

function Contact() {
    return (
        <>
            <div className='container'>
                <div className='row w-50 mx-auto my-5'>
                    <form>
                        <div class="mb-3">
                            <label for="exampleInputFullName" class="form-label">Full Name</label>
                            <input type="text" class="form-control" id="exampleInputFullName" placeholder='Full Name' aria-describedby="nameHelp" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPhone" class="form-label">Phone</label>
                            <input type="text" class="form-control" id="exampleInputPhone" placeholder='Phone' aria-describedby="phoneHelp" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" placeholder='Email Address' aria-describedby="emailHelp" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputMessage" class="form-label">Password</label>
                            <textarea class="form-control" id="exampleInputMessage" placeholder='enter your message...' rows="5" >

                            </textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact;