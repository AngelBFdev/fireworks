require "test_helper"

class PagesControllerTest < ActionDispatch::IntegrationTest
  test "root should get pages fireworks" do
    assert_routing root_url, controller: "pages", action: "fireworks"
  end
end
