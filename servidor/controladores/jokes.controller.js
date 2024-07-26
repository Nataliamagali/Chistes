const Joke = require('../modelos/jokes.model');

// se obtiene  todos los chistes
exports.getAllJokes = async (req, res) => {
  try {
    const jokes = await Joke.find();
    res.json(jokes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// se obtiene un chiste
exports.getJoke = async (req, res) => {
  try {
    const joke = await Joke.findById(req.params.id);
    if (!joke) return res.status(404).json({ message: 'Chiste no encontrado' });
    res.json(joke);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// se crea  un chiste
exports.createJoke = async (req, res) => {
  const joke = new Joke({
    content: req.body.content,
  });
  try {
    const newJoke = await joke.save();
    res.status(201).json(newJoke);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// se actualiza un chiste
exports.updateJoke = async (req, res) => {
  try {
    const joke = await Joke.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!joke) return res.status(404).json({ message: 'Chiste no encontrado' });
    res.json(joke);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// se elimina  un chiste
exports.deleteJoke = async (req, res) => {
  try {
    const joke = await Joke.findByIdAndDelete(req.params.id);
    if (!joke) return res.status(404).json({ message: 'Chiste no encontrado' });
    res.json({ message: 'Chiste eliminado' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
