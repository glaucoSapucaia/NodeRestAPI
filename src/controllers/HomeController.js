class HomeController {
  index(req, res) {
    res.json({
      jsonIndexHome: true,
    });
  }
}

export default new HomeController();
