import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';

export default class Settings extends Component {
  handleClick() {
    alert('hi');
  }
  render() {
    return <div className="settings">
    <div className="heading__blue">@</div>
    <Link to="/about" className="heading__yellow">About</Link><br></br>
    <Link to="/settings/deletepage" className="delete"><img alt='delete icon' width="100" height="100" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNOSAxOWMwIC41NTItLjQ0OCAxLTEgMXMtMS0uNDQ4LTEtMXYtMTBjMC0uNTUyLjQ0OC0xIDEtMXMxIC40NDggMSAxdjEwem00IDBjMCAuNTUyLS40NDggMS0xIDFzLTEtLjQ0OC0xLTF2LTEwYzAtLjU1Mi40NDgtMSAxLTFzMSAuNDQ4IDEgMXYxMHptNCAwYzAgLjU1Mi0uNDQ4IDEtMSAxcy0xLS40NDgtMS0xdi0xMGMwLS41NTIuNDQ4LTEgMS0xczEgLjQ0OCAxIDF2MTB6bTUtMTd2MmgtMjB2LTJoNS43MTFjLjkgMCAxLjYzMS0xLjA5OSAxLjYzMS0yaDUuMzE1YzAgLjkwMS43MyAyIDEuNjMxIDJoNS43MTJ6bS0zIDR2MTZoLTE0di0xNmgtMnYxOGgxOHYtMThoLTJ6Ii8+PC9zdmc+"></img></Link>
    <Link to="/settings/editpage" className="edit"><img alt= 'edit icon' width="100" height="100" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMjAuNzE1IDI0Yy0uODY0IDAtMS43MTEtLjM1MS0yLjMyMi0uOTYybC0xMC45NTMtMTAuOTUyYy0uMjc1LS4yNzQtLjY1NS0uNDMyLTEuMDQ0LS40MzJsLS4xMTEuMDA0Yy0xLjY4MS4xMjktMy4zNzMtLjQ4MS00LjU4NC0xLjY5Mi0xLjA5Ny0xLjA5OS0xLjcwMS0yLjU2MS0xLjcwMS00LjExNyAwLTEuMDQ2LjIzNy0yLjIyNS43MTUtMy4yNzlsMy44MDkgMy44MTFjLjQzNi0uMDczLjk2OC0uMzkzIDEuNDA1LS45MzUuMjgzLS4zNS40MjctLjY3NS40NjYtLjkxbC0zLjgyNi0zLjgyNmMxLjA1Ni0uNDc2IDIuMjE5LS43MSAzLjI1NS0uNzEgMS41MzMgMCAzLjA0My42MDEgNC4xNDMgMS43MDIgMS4yMDggMS4yMDkgMS44MjMgMi44OCAxLjY5IDQuNTg0LS4wMzEuNDI4LjEyNS44NTEuNDMgMS4xNTZsMTAuOTUxIDEwLjk1MWMuNjIuNjIxLjk2MiAxLjQ0Ni45NjIgMi4zMjIgMCAxLjgxMS0xLjQ3NCAzLjI4NS0zLjI4NSAzLjI4NXptLTE0LjMxOS0xNC4zNDNjLjkxNSAwIDEuODEuMzcxIDIuNDU2IDEuMDE4bDEwLjk1MyAxMC45NTFjLjIzOS4yNC41NzEuMzc3LjkwOS4zNzcuNzEgMCAxLjI4OC0uNTc3IDEuMjg4LTEuMjg3IDAtLjM0NC0uMTM0LS42NjctLjM3OC0uOTExbC0xMC45NDktMTAuOTUxYy0uNzE1LS43MTYtMS4wODMtMS43MDctMS4wMDktMi43MTguMDg4LTEuMTI3LS4zMTctMi4yMjctMS4xMTEtMy4wMjItLjQ5My0uNDkyLTEuMDk4LS44MzMtMS43NTgtMWwxLjQ5IDEuNDkxYy4yMTggMS4wMDEuMTI1IDEuOTQ3LS44MDQgMy4wOTctMS4wMDIgMS4yNDMtMi4yOTIgMS45MzItMy44OCAxLjU4NmwtMS40ODktMS40OWMuMTY3LjY2LjUwOCAxLjI2NiAxIDEuNzU5Ljc5Ni43OTQgMS44OTMgMS4yIDMuMDE3IDEuMTFsLjI2NS0uMDF6bTE0LjMwNCAxMC41NDNjLS4yNzYgMC0uNS4yMjQtLjUuNXMuMjI0LjUuNS41LjUtLjIyNC41LS41LS4yMjMtLjUtLjUtLjV6bS0xMS4zMi0zLjM0NmwtNC43NSA0Ljc4OWMtLjE2Ni4xNjYtLjQzNy4xNjYtLjYwMyAwLS4xNjUtLjE2Ni0uMTY2LS40MzYgMC0uNjAybDQuNzUxLTQuNzg5LS45MzctLjkzNi00Ljc0MyA0Ljc4MWMtLjE2NS4xNjgtLjQzNS4xNjctLjYwMS4wMDEtLjE2Ni0uMTY3LS4xNjYtLjQzNiAwLS42MDJsNC43NDMtNC43ODEtMS4wMDUtMS4wMDUtNS4xODggNS4yMjYtMS4wNDcgNS4wNjQgNS4yMDMtLjkxMiA1LjE4Ny01LjIyNS0xLjAxLTEuMDA5em01LjMwNi05LjY0M2w0LjkzNy00Ljk3N2MuMTY3LS4xNjcuNDM1LS4xNjcuNjAzLS4wMDEuMTY2LjE2Ni4xNjYuNDM3IDAgLjYwM2wtNC45MzggNC45NzcuOTM1LjkzNSA0LjkzMi00Ljk3MWMuMTY1LS4xNjUuNDM1LS4xNjUuNjAxIDAgLjE2Ni4xNjcuMTY2LjQzNy4wMDEuNjAybC00LjkzMyA0Ljk3MSAxLjAxMiAxLjAxMiA2LjE2NC02LjIxLTQuMTUyLTQuMTUyLTYuMTY0IDYuMjA5IDEuMDAyIDEuMDAyeiIvPjwvc3ZnPg=="></img></Link><br></br>
    <Link to="/profile/index" className="heading__orange">Back</Link><br></br>
    <Button  onClick={this.handleClick} className="heart"><img alt='heart icon' width="100" height="100" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNNi4yOCAzYzMuMjM2LjAwMSA0Ljk3MyAzLjQ5MSA1LjcyIDUuMDMxLjc1LTEuNTQ3IDIuNDY5LTUuMDIxIDUuNzI2LTUuMDIxIDIuMDU4IDAgNC4yNzQgMS4zMDkgNC4yNzQgNC4xODIgMCAzLjQ0Mi00Ljc0NCA3Ljg1MS0xMCAxMy01LjI1OC01LjE1MS0xMC05LjU1OS0xMC0xMyAwLTIuNjc2IDEuOTY1LTQuMTkzIDQuMjgtNC4xOTJ6bS4wMDEtMmMtMy4xODMgMC02LjI4MSAyLjE4Ny02LjI4MSA2LjE5MiAwIDQuNjYxIDUuNTcgOS40MjcgMTIgMTUuODA4IDYuNDMtNi4zODEgMTItMTEuMTQ3IDEyLTE1LjgwOCAwLTQuMDExLTMuMDk3LTYuMTgyLTYuMjc0LTYuMTgyLTIuMjA0IDAtNC40NDYgMS4wNDItNS43MjYgMy4yMzgtMS4yODUtMi4yMDYtMy41MjItMy4yNDgtNS43MTktMy4yNDh6Ii8+PC9zdmc+"></img></Button><br></br>
    </div>;
  }
}
