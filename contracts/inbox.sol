pragma solidity 0.4.17;

contract Inbox{
    string public message;
    
    function Inbox(string iniMsg) public{
        message = iniMsg;
    }
    
    function setmsg(string setMsg) public{
        message = setMsg;
    }
}