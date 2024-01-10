
function robotTransition(robotId, angle, time) {
    const robot = document.getElementById(robotId);
    if (robot) {
        robot.style.transform = `rotate(${angle}deg)`;
        robot.style.transition = `rotateArm ${time}s ease`;
        const position = {
            left: robot.offsetLeft,
            top: robot.offsetTop,
            withd: robot.offsetWidth,
            height: robot.offsetHeight
        }
        console.log({ position });
    }
}
function getRobotVertices(robot) {
    const leftTop = { x: robot.offsetLeft, y: robot.offsetTop };
    const rightTop = { x: leftTop.x + robot.offsetWidth, y: leftTop.y };
    const leftBottom = { x: leftTop.x, y: leftTop.y + robot.offsetHeight };
    const rightBottom = { x: rightTop.x, y: leftBottom.y };

    console.log({ leftTop, rightTop, leftBottom, rightBottom });
    return { top:(leftTop+ rightTop)/2, bot:(leftBottom + rightBottom)/2 };
}
function rotatePoint(x, y, angle) {
    const radians = angle * (Math.PI / 180);
    const newX = x * Math.cos(radians) - y * Math.sin(radians);
    const newY = x * Math.sin(radians) + y * Math.cos(radians);
    return { x: newX, y: newY };
}
function createBox(color, name, robotId, angle) {
    var box = document.createElement('div');
    box.id = name;
    var container = document.getElementsByClassName('groupbox')[0];
    const robot = document.getElementById(robotId);

    const positionrobot = {
        left: robot.offsetLeft,
        top: robot.offsetTop,
        withd: robot.offsetWidth,
        height: robot.offsetHeight
    }

    box.style.position = 'absolute';
    // box.style.left = positionrobot.left + 'px';
    // box.style.top =  positionrobot.top-20 + 'px';
    box.style.width = '20px';
    box.style.height = '20px';
    box.style.backgroundColor = color;
    var body = document.getElementsByTagName('body')[0];
    container.appendChild(box);
    const position = {
        left: box.offsetLeft,
        top: box.offsetTop,
        withd: box.offsetWidth,
        height: box.offsetHeight
    }
    console.log({ position });
}
function removeBox() {
    var box = document.getElementsByClassName('groupbox')[0];
    box.removeChild(box.childNodes[0]);

}