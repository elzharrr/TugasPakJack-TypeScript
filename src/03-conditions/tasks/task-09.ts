/**
 * A manufacturing company monitors production machines continuously.

Business Rules

If the machine is powered off:

Display Machine Offline.

Otherwise, check its operating condition.

If the machine temperature exceeds 90°C:

If vibration level is High, display:
Emergency Shutdown
Otherwise:
Cooling Required

If the temperature is 90°C or below:

If production speed is below 80%, display:
Performance Warning
Otherwise:
Machine Operating Normally

Today's machine status:
| Information      | Value |
| ---------------- | ----- |
| Powered On       | Yes   |
| Temperature      | 95    |
| High Vibration   | No    |
| Production Speed | 92    |

Student Tasks
- Declare all variables.
- Translate every business rule into conditional statements.
- Display the final machine status.
 */

const poweron = true
const temp = 95
const highvibration = false
const prodspeed = 92

if (poweron){
} else {
    console.log("Machine Off")
}
if(highvibration){
    console.log("Emergency Shutdown for manchine" )
} else {}
if (temp > 90){
    console.log("Cooling Required before working again")
}else if (prodspeed < 80 ){
    console.log("Performance Warning need to reset")
} else {
    console.log("Machine Operating Normally")
}