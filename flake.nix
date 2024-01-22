{
  description = "website dev environment";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-23.11";
    flake-utils.url = "github:numtide/flake-utils/4022d587cbbfd70fe950c1e2083a02621806a725";
  };

  outputs = inputs@{ self, nixpkgs, flake-utils, ... }:
  let

    lastModifiedDate = self.lastModifiedDate or self.lastModified or "19700101";
    version = builtins.substring 0 0 lastModifiedDate;

  in flake-utils.lib.eachDefaultSystem (system:
    let
      name = "website";
      src = ./.;
      pkgs = import nixpkgs { inherit system; };
      pkg_buildInputs = with pkgs; [
        nodejs_20
        nodejs_20.pkgs.pnpm
      ];
      pkg_nativeBuildInputs = with pkgs; [ ];
    in
    {
      devShells.default = with pkgs; pkgs.mkShell {
        buildInputs = pkg_buildInputs ++ pkg_nativeBuildInputs;
        shellHook = ''
          fish
        '';
      };
    }
  );
}
