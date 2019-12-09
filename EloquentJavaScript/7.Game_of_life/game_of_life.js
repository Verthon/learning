class GameOfLife {
  constructor (cells, size) {
    this.cells = cells
    this.size = size
    this.grid = []
    this.createEmptyGrid()
    this.setAliveCells()
  }

  createEmptyGrid () {
    for (let xAxis = 0; xAxis < this.size; xAxis++) {
      this.grid.push([])
      for (let yAxis = 0; yAxis < this.size; yAxis++) {
        this.grid[xAxis].push({ isAlive: false })
      }
    }
  }

  setAliveCells () {
    this.cells.forEach(([x, y]) => {
      this.grid[x][y].isAlive = true
    })
  }
}

const game = new GameOfLife(
  [
    [1, 4],
    [0, 0]
  ],
  5
)

game.setAliveCells()

console.log(game.grid)
