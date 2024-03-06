document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("gameCanvas");
  const ctx = canvas.getContext("2d");

  const dinoImage = new Image();
  dinoImage.src = "/images/cat.png"; // 이미지 경로 변경

  const dino = {
    x: 10,
    y: 400,
    width: 50,
    height: 50,
    jumpPower: 9,
    gravity: 0.5,
    velocity: 0,
    onGround: true,
  };

  let obstacles = [];
  let score = 0;
  let s_score;
  let obstacleTimer;

  const adjustCanvasSize = () => {
    canvas.style.width = "100%";
    canvas.style.height = "100vh";
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  };

  adjustCanvasSize();
  window.addEventListener("resize", adjustCanvasSize);

  const startObstacleTimer = () => {
    if (obstacleTimer) {
      clearInterval(obstacleTimer);
    }
    obstacleTimer = setInterval(() => {
      obstacles.push({
        x: canvas.width,
        y: 418,
        width: 15,
        height: 35,
      });
    }, 2000);
  };

  const update = () => {
    if (!dino.onGround) {
      dino.velocity += dino.gravity;
      dino.y += dino.velocity;
      if (dino.y > 400) {
        dino.y = 400;
        dino.onGround = true;
      }
    }

    obstacles = obstacles.filter((obstacle) => {
      obstacle.x -= 5;
      const hit =
        dino.x < obstacle.x + obstacle.width &&
        dino.x + dino.width > obstacle.x &&
        dino.y < obstacle.y + obstacle.height &&
        dino.y + dino.height > obstacle.y;

      if (hit) {
        s_score = score;
        alert("Game Over!");
        location.replace(`${s_score}`);
        restartGame();
        return false;
      }

      // 점수 증가 조건 추가
      if (obstacle.x + obstacle.width < dino.x && !obstacle.scored) {
        score++;
        obstacle.scored = true; // 점수가 이미 증가된 장애물 표시
      }

      return obstacle.x + obstacle.width > 0;
    });

    draw();
    requestAnimationFrame(update);
  };

  const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (dinoImage.complete) {
      ctx.drawImage(
        dinoImage,
        dino.x,
        dino.y,
        dino.width,
        dino.height
      );
    }

    obstacles.forEach((obstacle) => {
      ctx.fillStyle = "red";
      ctx.fillRect(
        obstacle.x,
        obstacle.y,
        obstacle.width,
        obstacle.height
      );
    });

    ctx.fillStyle = "black";
    ctx.font = "20px Arial";
    ctx.fillText("Score: " + score, 10, 30);
  };

  window.addEventListener("keydown", (e) => {
    if (e.code === "Space" && dino.onGround) {
      dino.velocity = -dino.jumpPower;
      dino.onGround = false;
    }
  });

  const restartGame = () => {
    obstacles = [];
    score = 0;
    startObstacleTimer();
  };

  startObstacleTimer();
  update();
});
