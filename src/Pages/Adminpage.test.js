import {render,screen} from '@testing-library/react'
//import App from '../App';
import Adminpage from './Adminpage';


// test('renders learn react link', () => {
//     render(<Adminpage />);
//     // console.log( render(<Adminpage />))
//     // const linkElement = screen.getByText(/learn react/i);
//     // expect(linkElement).toBeInTheDocument();
//   });
test('username input sholud be rendered',()=>{
    render(<Adminpage></Adminpage>);
     const usernameInputp =screen.getByPlaceholderText("UserName");
    expect(usernameInputp).toBeInTheDocument()
})
// test("username input sholud be rendered",()=>{
//     render(<Adminpage></Adminpage>);
//     const usernameInput =screen.getByPlaceholderText(/Enter your UserName/i);
//     expect(usernameInput).toBeInTheDocument()
// })

test("password input sholud be rendered",()=>{
    render(<Adminpage></Adminpage>);
    const passwordInput =screen.getByPlaceholderText(/password/i);
    expect(passwordInput).toBeInTheDocument()
})

test("button input sholud be rendered",()=>{
    render(<Adminpage/>);
    const buttonInput =screen.getByRole("button");
    expect(buttonInput).toBeInTheDocument()
});



























// import React from "react";
// import { shallow } from "enzyme";
// import Adminpage from "./Adminpage";



// describe('Adminpage', ()=>{
//     let wrapper;
//     const onSubmitMock=jest.fn();
//     const preventDefaultMock=jest.fn();
//     const setStateMock=jest.fn();


//     beforeEach(()=>{
//         wrapper =shallow(<Adminpage onSubmit={onSubmitMock}/>);
//     });

//     afterEach(()=>{
//         jest.clearAllMocks();
//     });

//     test('sholud update email state when eamil input changes',()=>{
//         const usernameInput=wrapper.find('#username');
//         username.simulate('change',{target:{value:'Admin'}});
//         expect(wrapper.state('username')).toEqual('Admin');
//     });

//     test('sholud update password state when eamil input changes',()=>{
//         const passwordInput=wrapper.find('#password');
//         passwordInput.simulate('change',{target:{value:'Admin'}});
//         expect(wrapper.state('password')).toEqual('Admin');
//     });


//     test('sholud submit login',()=>{
//         const form=wrapper.find('form');
//         form.simulate('submit',{preventDefault: preventDefaultMock});
        
//         expect(preventDefaultMock).toHaveBeenCalled();
//         expect(onSubmitMock).toHaveBeenCalledWith(wrapper.state('username'),wrapper.state('password'));
//     });


//     test('sholud show error msg when login fails',()=>{
//         wrapper.setState({error:'Invalid username or password'});
//         const errorMessage=wrapper.find('.error-message');
//         expect(errorMessage).toHaveLength(1);
//         expect(errorMessage.text().toEqual('Inavlid'));
//     });

//     test('sholud clear error msg when username changes',()=>{
//         wrapper.setState({error:'Invalid username or password'});
//         const usernameInput=wrapper.find('#username');
//         usernameInput.simulate('change',{target:{value: 'Admin'}})
//         expect(setStateMock).toHaveBeenCalledWith({error:''}); 
//     });

// });