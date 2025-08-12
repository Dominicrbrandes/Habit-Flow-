// entities/all.js

// Simulated in-memory store
const habitCompletions = [];
let userData = {
  baseline_completion_rate: 25,
  goal_completion_rate: 0,
};

export const Habit = {
  async filter(filter = {}, sort = "", limit = 100) {
    return mockHabits.filter(h => h.is_active !== false).slice(0, limit);
  },
  async create(data) {
    mockHabits.push({ ...data, id: Date.now().toString(), created_date: new Date() });
  },
  async delete(id) {
    const index = mockHabits.findIndex(h => h.id === id);
    if (index !== -1) mockHabits.splice(index, 1);
  }
};

export const HabitCompletion = {
  async list(sort = "", limit = 1000) {
    return habitCompletions.slice(0, limit);
  },
  async create(data) {
    habitCompletions.push({ ...data, id: Date.now().toString(), completed: true });
  },
  async update(id, updateData) {
    const index = habitCompletions.findIndex(c => c.id === id);
    if (index !== -1) {
      habitCompletions[index] = { ...habitCompletions[index], ...updateData };
    }
  }
};

export const MotivationalFeedback = {
  async create(data) {
    console.log("MotivationalFeedback stored:", data);
  }
};

export const User = {
  async me() {
    return userData;
  },
  async updateMyUserData(data) {
    userData = { ...userData, ...data };
  }
};

// Mock habits for testing
const mockHabits = [
  {
    id: "1",
    title: "Read 10 pages",
    description: "Daily reading habit",
    category: "daily",
    is_active: true,
    created_date: new Date()
  },
  {
    id: "2",
    title: "Workout",
    description: "Morning strength training",
    category: "task",
    is_active: true,
    created_date: new Date()
  }
];
