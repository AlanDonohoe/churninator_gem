# coding: utf-8
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'churninator/version'

Gem::Specification.new do |spec|
  spec.name          = 'churninator'
  spec.version       = Churninator::VERSION
  spec.authors       = ['Alan Donohoe']
  spec.email         = ['alandonohoe123[at]gmail.com']

  spec.summary       = 'The Churninator... Kills Churn'
  spec.description   = 'Give your cancel subscription button an ID of ' \
                        "'cancel'. Let The Churninator do its work and watch "
                        'churn drop dead.'
  spec.homepage      = 'https://github.com/AlanDonohoe/churninator_gem'
  spec.license       = 'MIT'

  # Prevent pushing this gem to RubyGems.org. To allow pushes either set the 'allowed_push_host'
  # to allow pushing to a single host or delete this section to allow pushing to any host.
  if spec.respond_to?(:metadata)
    spec.metadata['allowed_push_host'] = "https://rubygems.org'"
  else
    raise "RubyGems 2.0 or newer is required to protect against " \
      "public gem pushes."
  end

  spec.files         = `git ls-files -z`.split("\x0").reject do |f|
    f.match(%r{^(test|spec|features)/})
  end
  spec.bindir        = "exe"
  spec.executables   = spec.files.grep(%r{^exe/}) { |f| File.basename(f) }
  spec.require_paths = ["lib"]

  spec.add_development_dependency "bundler", "~> 1.14"
  spec.add_development_dependency "rake", "~> 10.0"
end
