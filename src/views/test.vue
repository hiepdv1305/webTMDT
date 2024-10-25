<template>
  <div class="container">
    <!-- Deselect All Button -->
    <button v-if="hasSelection" class="deselect-all-btn" @click="deselectAll">
      <span class="icon">✖</span>
    </button>

    <!-- Grid with Row and Column Selection Checkboxes -->
    <div class="grid-container">
      <!-- Top Row for Column Selection Checkboxes with Diagonal Selection Checkbox on the Left -->
      <div class="column-selection">
        <!-- Diagonal selection checkbox wrapped in a div for alignment -->
        <div class="corner-checkbox">
          <input
            ref="cornerCheckbox"
            type="checkbox"
            class="checkbox"
            @change="toggleDiagonalSelection"
          />
        </div>
        <!-- Column selection checkboxes -->
        <input
          ref="checkboxes"
          type="checkbox"
          class="checkbox"
          v-for="colIndex in itemsPerRow"
          :key="'col-' + colIndex"
          @change="toggleColumnSelection(colIndex - 1)"
        />
      </div>

      <!-- Rows with Row Selection Checkbox and Boxes -->
      <div
        v-for="(row, rowIndex) in rowNumbers"
        :key="'row-' + rowIndex"
        class="row"
      >
        <!-- Row selection checkbox -->
        <input
          ref="checkboxes"
          type="checkbox"
          class="checkbox row-checkbox"
          @change="toggleRowSelection(rowIndex)"
        />

        <!-- Div bọc riêng bảng ô số -->
        <div class="grid-wrapper">
          <div class="grid">
            <div
              v-for="(item, colIndex) in row"
              :key="'box-' + rowIndex + '-' + colIndex"
              class="box"
              :class="{ selected: selectedNumbers.includes(item) }"
              @click="toggleBoxSelection(item)"
            >
              <span class="main-text">{{ item }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      maxNumber: 99,
      rowNumbers: [],
      selectedNumbers: [],
      itemsPerRow: 10
    }
  },
  computed: {
    // Kiểm tra nếu có ít nhất một ô trong bảng được chọn
    hasSelection () {
      return this.selectedNumbers.length > 0
    }
  },
  methods: {
    toggleBoxSelection (number) {
      if (this.selectedNumbers.includes(number)) {
        this.selectedNumbers = this.selectedNumbers.filter(
          item => item !== number
        )
      } else {
        this.selectedNumbers.push(number)
      }
    },
    generateNumbers () {
      const num = parseInt(this.maxNumber) || 0
      this.rowNumbers = []
      for (let i = 0; i <= num; i += this.itemsPerRow) {
        const row = Array.from({ length: this.itemsPerRow }, (_, j) =>
          (i + j).toString().padStart(2, '0')
        )
        this.rowNumbers.push(row)
      }
      this.selectedNumbers = []
    },
    toggleRowSelection (rowIndex) {
      const row = this.rowNumbers[rowIndex].map(item => item)
      const rowIsSelected = row.every(item =>
        this.selectedNumbers.includes(item)
      )

      if (rowIsSelected) {
        this.selectedNumbers = this.selectedNumbers.filter(
          item => !row.includes(item)
        )
      } else {
        this.selectedNumbers.push(
          ...row.filter(item => !this.selectedNumbers.includes(item))
        )
      }
    },
    toggleColumnSelection (colIndex) {
      const colItems = this.rowNumbers.map(row => row[colIndex])
      const colIsSelected = colItems.every(item =>
        this.selectedNumbers.includes(item)
      )

      if (colIsSelected) {
        this.selectedNumbers = this.selectedNumbers.filter(
          item => !colItems.includes(item)
        )
      } else {
        this.selectedNumbers.push(
          ...colItems.filter(item => !this.selectedNumbers.includes(item))
        )
      }
    },
    toggleDiagonalSelection () {
      const diagonalItems = []
      console.log(this.rowNumbers)
      this.rowNumbers.forEach((row, index) => {
        console.log(row, index)
        if (row[index]) {
          diagonalItems.push(row[index])
        }
      })

      const diagonalIsSelected = diagonalItems.every(item =>
        this.selectedNumbers.includes(item)
      )

      if (diagonalIsSelected) {
        this.selectedNumbers = this.selectedNumbers.filter(
          item => !diagonalItems.includes(item)
        )
      } else {
        this.selectedNumbers.push(
          ...diagonalItems.filter(item => !this.selectedNumbers.includes(item))
        )
      }
    },
    // Deselect all selected numbers
    deselectAll () {
      this.selectedNumbers = []
      this.$refs.checkboxes.forEach(checkbox => (checkbox.checked = false))
      this.$refs.cornerCheckbox.checked = false
    }
  },
  mounted () {
    this.generateNumbers()
  }
}
</script>

<style scoped>
/* Container */
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  position: relative;
}

/* Deselect All Button */
.deselect-all-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #ff5151;
  color: #ffffff;
  border: none;
  /* border-radius: 40%; */
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.deselect-all-btn:hover {
  background-color: #ff0000;
}

/* Grid Layout */
.grid-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.column-selection {
  display: grid;
  grid-template-columns: 50px repeat(10, 60px);
  gap: 10px;
  justify-items: center;
  align-items: center;
  margin-bottom: 10px;
}

.corner-checkbox {
  display: flex;
  align-items: center;
  margin-right: 17px;
  justify-content: center;
  width: 50px;
}

.row {
  display: grid;
  grid-template-columns: 30px 1fr;
  gap: 10px;
  align-items: center;
}

.grid-wrapper {
  margin-left: 20px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(10, 60px);
  gap: 10px;
  justify-items: center;
}

.checkbox {
  -webkit-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid #7070a0;
  border-radius: 50%;
  outline: none;
  cursor: pointer;
  background-color: transparent;
  transition: background-color 0.3s, border-color 0.3s;
  justify-self: center;
}

.checkbox:checked {
  background-color: #ffd000;
  border-color: #000000;
}

.box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: #2b2d42;
  color: #ffffff;
  font-size: 18px;
  width: 60px;
  height: 60px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.box.selected {
  background-color: #ffd000;
  color: #000000;
}

.main-text {
  font-size: 16px;
  font-weight: bold;
  color: inherit;
}
</style>
