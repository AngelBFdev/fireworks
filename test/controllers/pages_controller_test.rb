require "test_helper"

class PagesControllerTest < ActionDispatch::IntegrationTest
  test "root should get pages fireworks" do
    assert_routing root_url, controller: "pages", action: "fireworks"
  end

  test "root should have the fireworks controller" do
    get root_url

    assert_select "div[data-controller='fireworks']"
    assert_select "div[data-action='click->fireworks#explode']"
  end
end
