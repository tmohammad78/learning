# Debugger
A debugger can start some process and debug it, or attach itself to an existing process.
It can single-step through the code, set breakpoints and run to them, examine variable values and stack traces.
Debuggers start with only a few basic services provided by the operating system and the compiler/linker

## Linux debugging
The Swiss army knife of Linux debuggers is the ptrace system call . It's a versatile and rather complex tool that allows one process to control the execution of another and to peek and poke at its innards .

## Fork
In the c language , fork makes a child process in the difference memory address and the parent and child process runs concurrently , They are in the different address because of that we have no access in the child process to the global variable in the parent process .
those variables initialized before the fork() call have the same values in both address spaces.

If fork() returns a negative value, the creation of a child process was unsuccessful.
fork() returns a zero to the newly created child process.
fork() returns a positive value, the process ID of the child process.

**Their output lines are intermixed in a rather unpredictable way. Moreover, the order of these lines are determined by the CPU scheduler. Hence, if you run this program again, you may get a totally different result.**

when we use fork , it happens :
<div style="text-align:center;height:200px;" >
<img src="https://www.csl.mtu.edu/cs4411.ck/www/NOTES/process/fork/fork-2.jpg"/>
</div>
 
It seems it use ptrace under the hood to debug

links:
https://www.csl.mtu.edu/cs4411.ck/www/NOTES/process/fork/create.html
https://www.youtube.com/watch?v=0DDrseUomfU
https://eli.thegreenplace.net/2011/01/27/how-debuggers-work-part-2-breakpoints
http://www.alexonlinux.com/how-debugger-works